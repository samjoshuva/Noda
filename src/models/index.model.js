const User = require("./user.model");

//exports all your models to add it in admin panel
module.exports = {
  models: [
    {
      resource: User,
      options: {
        name: "Users",
        listProperties: ["email", "username"],
        properties: {
          about: { type: "richtext" }
        },
        filterProperties: ["email", "username"]
      }
    }
  ]
};
