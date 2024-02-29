// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "Apache 2.0") {
    return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  } else if (license === "Mozilla Public 2.0") {
    return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
  } else if (license === "ISC") {
    return "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
  } else if (license === "None of the above") {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "Mozilla Public 2.0") {
    return "https://opensource.org/licenses/MPL-2.0";
  } else if (license === "ISC") {
    return "https://opensource.org/licenses/ISC";
  } else if (license === "None of the above") {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "This application utilizes the standard MIT License.";
  } else if (license === "Apache 2.0") {
    return "This application utilizes the Apache 2.0 License.";
  } else if (license === "Mozilla 2.0") {
    return "This application utilizes the Mozilla Public 2.0 License.";
  } else if (license === "ISC") {
    return "This application utilizes the standard ISC License.";
  } else if (license === "None of the above") {
    return "";
  }
}

// Function to generate clickable license badge

function renderLicenseClickable(license) {
  if (license === "None of the above") {
    return "";
  } else {
    return `[${renderLicenseBadge(license)}](${renderLicenseLink(license)})`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("\x1b[36mUser responses:\x1b[0m \n", data);
  const contactEmail = `Email: [${data.email}](${data.email})`;
  const contactGithub = `GitHub: [${data.github}](https://github.com/${data.github})`;

  return `# ${data.title} ${renderLicenseClickable(data.license)}

  ## Project Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Deployment](#deployment)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${renderLicenseSection(data.license)}

  ${renderLicenseClickable(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  Have questions or suggestions for the developer? 

  Please feel free to reach out via:

  ${contactEmail}

  ${contactGithub}
  
  ## Deployment
  
  [Link to the GitHub repo for this project](${data.deployRepo})
  
  [Link to the deployed project on GitPages](${data.deployPages})

  See below for a screenshot/demo of the project (version ${data.version}):
  
  ![Screenshot/demo of project](${data.screenshot})
  `;
}

module.exports = generateMarkdown;
