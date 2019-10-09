#!/usr/bin/env node
import program from "commander";
import inquirer from "inquirer";
import fs from "fs";

import path from "path";

import { register } from "./src/admin/model";

program.version("0.1.0").description("cli util");

const createQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter name for app...?"
  },
  {
    type: "input",
    name: "model",
    message: "Do you want to create new model for this app..? (yes/no)"
  }
];

program
  .command("createapp")
  .alias("app")
  .description("Create a new App")
  .action(() => {
    inquirer
      .prompt(createQuestions)
      .then(answers => {
        if (!fs.existsSync(path.join(__dirname, "src", answers.name))) {
          fs.mkdirSync(path.join(__dirname, "src", answers.name));
        }

        if (answers.model === "yes") {
          let modelString = `import { Schema, model } from "mongoose";
const ${answers.name}Schema = new Schema({

});
export default model("${answers.name}", ${answers.name}Schema);
        `;

          fs.writeFile(
            `./src/${answers.name}/${answers.name}.model.js`,
            modelString.toString(),
            err => {
              if (err) console.log(err);
            }
          );
        }

        let modelString = `import express from "express";
const router = express.Router();

router.get('/', (req, res)=> res.send(" ${answers.name} working"))

export default router;
`;

        fs.writeFile(
          `./src/${answers.name}/${answers.name}.route.js`,
          modelString.toString(),
          err => {
            if (err) console.log(err);
          }
        );

        fs.writeFile(`./src/${answers.name}/${answers.name}.ctrl.js`, err => {
          if (err) console.log(err);
        });

        let urlString = `
app.use("/${answers.name}", require("./${answers.name}/${answers.name}.route").default);
`;

        fs.appendFile(`./src/urls.js`, urlString.toString(), err => {
          if (err) console.log(err);

          console.log(`Updated urls.js`);
        });

        console.log(`configure model.js for ${answers.name}`);
      })
      .catch(err => {
        console.log(err);
      });
  });

const adminQuestions = [
  {
    type: "input",
    name: "username",
    message: "Enter admin name or email"
  },
  {
    type: "input",
    name: "password",
    message: "Enter password"
  }
];

program
  .command("createadmin")
  .alias("a")
  .description("Create a admin for project")
  .action(async () => {
    inquirer.prompt(adminQuestions).then(async answers => {
      await require("./server/db");

      await register(answers);

      // process.exit();
    });
  });

program.parse(process.argv);
