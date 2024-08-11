// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '';
  }   // If there is no license, return an empty string
  return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)';
  }   // If there is no license, return an empty string
  return '';
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return 'This project is licensed under the MIT license.';
  } // If there is no license, return an empty string
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return
  `#  ${data.title}

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

  ## Questions
  If you have any questions, you can reach me at [${data.email}](mailto:wwoydziak.7704@gmail.com${data.email}).
You can also find more of my work at [${data.github}](https://github.com/Wyatt7709/${data.github}).

`;
}

export default generateMarkdown;


