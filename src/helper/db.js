const mongoose = require("mongoose");

module.exports = {
  mongoose,
  connect: async connectionURI => {
    const mongoDB = await mongoose.connect(connectionURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("Connected to mongodb");
    return mongoDB;
  }
};
