// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license) {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL v3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD 3-Clause') {
    return '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license === 'None') {
    return '';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license) {
    return '[MIT](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL v3') {
    return '[GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD 3-Clause') {
    return '[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license === 'None') {
    return '';
  } else {
  return '';
}
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license === '') {
    return 'This project is licensed under the MIT license.';
  } else if (license === 'Apache 2.0') {
    return 'This project is licensed under the Apache 2.0 license.';
  } else if (license === 'GPL v3') {
    return 'This project is licensed under the GPL v3 license.';
  } else if (license === 'BSD 3-Clause') {
    return 'This project is licensed under the BSD 3-Clause license.';
  } else if (license === 'None') {
    return '';
  } else {
  return '';
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  ${renderLicenseBadge(data.license)}

  ${renderLicenseSection(data.license)}

  ## Questions
  If you have any questions, you can reach me at [${data.email}](mailto:${data.email}).
  You can also find more of my work at [${data.github}](https://github.com/${data.github}).
`;
}

export default generateMarkdown;


