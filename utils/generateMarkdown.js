// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseObject) {
  if(licenseObject == "MIT") {
    return `![License](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  else if (licenseObject == "APACHE 2.0") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  }
  else if(licenseObject == "Boost software license 1.0") {
    return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
  }
  else if(licenseObject == "Eclipse Public License 1.0") {
    return `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`;
  }
  else {
    return ``;
  }
 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseObject) {
  if(licenseObject == "MIT") {
    return `https://opensource.org/licenses/MIT`;
  }
  else if (licenseObject == "APACHE 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`;
  }
  else if(licenseObject == "Boost software license 1.0") {
    return `https://www.boost.org/LICENSE_1_0.txt`;
  }
  else if(licenseObject == "Eclipse Public License 1.0") {
    return `https://opensource.org/licenses/EPL-1.0`;
  }
  else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  
  [${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})
  
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

