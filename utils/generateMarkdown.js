// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const contactEmail = `Email: [${data.email}](${data.email})`;
  const contactGithub = `GitHub: [${data.github}](https://github.com/${data.github})`;

  return `# ${data.title} ${renderLicenseBadge(data.licenseBadge)}

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

  ${renderLicenseBadge(data.licenseBadge)}
  
  ${renderLicenseSection(data.licenseSection)}

  ## Questions

  Have questions or suggestions for the developer? 

  Please feel free to reach out via:

  ${contactEmail}

  ${contactGithub}

  
  ## Deployment
  
  [Link to the GitHub repo for this project](${data.deployRepo})
  
  [Link to the deployed project on GitPages](${data.deployPages})

  See below for a screenshot of the project.
  
  ![Screenshot of deployed project](${data.screenshot})
  `;
}

module.exports = generateMarkdown;
