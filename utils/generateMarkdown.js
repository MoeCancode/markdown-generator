//Create function that returns a license badge based on which license is passed in
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

// Create function that returns the license link
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

// Create function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ---
  
  [${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})
  
  <br>
  
  ## Description 
  ---
    ${data.projectDescription}

  <br>

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  <br>

  ## Installation 
  ---
    ${data.installation}

  <br>

  ## Usage 
  ---
    ${data.usage}

  <br>

  ## License 
  ---
    Click the link below to learn more about the license for this project:

  <a href = "${renderLicenseLink(data.license)}"> ${data.license} </a>
  
  <br>

  ## Contributing 
  ---
    ${data.contribution}

  <br>

  ## Tests
  ---
    ${data.testing}

  <br>

  ## Questions
  ---
    You can find other interesting peojects that I have worked on at:
  <a href = "https://github.com/${data.git}"> Github </a>

    If you have any questions about this projects, you can contact me directly at ${data.email}. 
`;
}

//Export generateMarkdown function when some other file makes require call on this file
module.exports = generateMarkdown;
// module.exports = { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection };

