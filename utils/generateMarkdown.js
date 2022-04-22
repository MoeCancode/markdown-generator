// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseObject) {
 return `![Github licence](http://img.shields.io/badge/license-${licenseObject}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseObject) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseObject) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  
  ${renderLicenseBadge(data.license)}
  
  <br>
  
  ## Description 
    ${data.projectDescription}

    <br>

  ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

  <br>

  ## Installation 
    ${data.installation}

  <br>

  ## Usage 
   ${data.usage}

  <br>

  ## License 
   ${data.license}

  <br>

  ## Contributing 
  ${data.contribution}

  <br>

  ## Tests
  ${data.testing}

  <br>

  ## Questions
  If you have any questions about this projects, you can contact me directly at ${data.email}. You can find other interesting peojects that I have worked on at https://github.com/${data.git}.
`;
}

module.exports = generateMarkdown;
// module.exports = { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection };

