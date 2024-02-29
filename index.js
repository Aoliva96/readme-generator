// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "Please input a title for this project:",
  },
  {
    name: "description",
    type: "input",
    message: "Please input a description for this project:",
  },
  {
    name: "installation",
    type: "input",
    message: "Please describe how to properly install this project:",
  },
  {
    name: "usage",
    type: "input",
    message: "Please list project usage information:",
  },
  {
    name: "license",
    type: "list",
    message:
      "Which license does this project utilize? (If none-of-the-above, manually input into .md file)",
    choices: [
      "MIT",
      "Apache 2.0",
      "Mozilla Public 2.0",
      "ISC",
      "None of the above",
    ],
    default: "MIT",
  },
  {
    name: "contributing",
    type: "input",
    message: "Please describe contribution guidelines for this project:",
  },
  {
    name: "tests",
    type: "input",
    message: "Please describe testing instructions for this project:",
  },
  {
    name: "email",
    type: "input",
    message: "Please input your preferred email address:",
  },
  {
    name: "github",
    type: "input",
    message: "Please input your GitHub username (case sensitive):",
  },
  {
    name: "deployRepo",
    type: "input",
    message: "Please paste link to this project's repo on GitHub:",
  },
  {
    name: "deployPages",
    type: "input",
    message: "Please paste link to the deployed project on GitPages:",
  },
  {
    name: "screenshot",
    type: "input",
    message:
      "Please input file path to a recent screenshot or demo of the project (example: assets/media/screenshot.png):",
  },
  {
    name: "version",
    type: "input",
    message:
      "Please input current public release version (example: 1.0, 2.4.1, etc):",
  },
];

const confirm = [
  {
    name: "fileNameInput",
    type: "input",
    message:
      "\x1b[36mAlmost done, please input a name for your new file (Example: README or README_template)\x1b[0m",
  },
  {
    name: "confirmation",
    type: "confirm",
    message:
      "\x1b[36mConfirm inputs and write to file? (Warning: this will overwrite files of the same name)\x1b[0m",
  },
];

const restart = [
  {
    name: "restartPrompt",
    type: "confirm",
    message: "\x1b[36mWould you like to restart and try again?\x1b[0m",
  },
];

// TODO: Create a function to write README files
function writeToFile(fileName, data) {
  return fs.writeFile(path.join(process.cwd(), fileName), data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("\x1b[32mData written to file successfully.\x1b[0m");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const results = generateMarkdown(data);
    console.log(`\x1b[36mPreview of generated file:\x1b[0m \n${results}`);

    inquirer.prompt(confirm).then((data) => {
      if (data.confirmation === false) {
        console.log("\x1b[31mFile generation cancelled\x1b[0m");

        inquirer.prompt(restart).then((data) => {
          if (data.restartPrompt === false) {
            console.log("\x1b[31mExiting application\x1b[0m");
            return;
          } else {
            console.log("\x1b[32mRestarting application\x1b[0m");
            init();
          }
        });
      } else {
        console.log(
          `\x1b[33mNew Markdown file generated from inputs \nSaving ${data.fileNameInput}.md to current working directory\x1b[0m`
        );
        writeToFile(`${data.fileNameInput}.md`, results);
      }
    });
  });
}

// Function call to initialize app
init();
