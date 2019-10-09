/**
 * {
  resource: resourse-name, // model name
  options: {
    name: "resourse-name",  // display name in admin panel
    listProperties: ["prop 1", "prop 2", ...],  // list of property displayed in admin panel
    properties: {
      about: { type: "richtext" }   // customize propey type
    },
    filterProperties: ["email", "username"]  // filter options
  }
}
*/

//exports all your models to add it in admin panel
export const models = [];
