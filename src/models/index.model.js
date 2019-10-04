import User from "./user.model";

//exports all your models to add it in admin panel
export const models = [
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
];
