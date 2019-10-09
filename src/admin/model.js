import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String
  }
});

let Admin = mongoose.model("Admin", adminSchema);

export default Admin;

export const register = async answers => {
  let admin = await Admin.findOne({ username: answers.username });

  if (admin) return console.log("admin already created");

  admin = new Admin(answers);

  bcrypt
    .genSalt(10)
    .then(salt => {
      bcrypt
        .hash(admin.password, salt)
        .then(async hashedPassword => {
          admin.password = hashedPassword;

          admin.save((err, result) => {
            if (err) console.log("error while saving doc ", err);

            console.log(`admin created`);
          });
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
};

export const login = async (username, password) => {
  let admin = await Admin.findOne({ username });

  if (!admin) return console.log("no admin created");

  bcrypt.compare(password, admin.password, (err, success) => {
    return success;
  });
};
