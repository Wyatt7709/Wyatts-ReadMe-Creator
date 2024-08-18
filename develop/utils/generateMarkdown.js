function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `[![License](https://img.shields.io/static/v1?label=License&message=${license}&color=blue&style=plastic)](https://opensource.org/licenses/${license.replace(' ', '-')})`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[${license} License](https://opensource.org/licenses/${license.replace(' ', '-')})`;
  }
  return 'This project is not licensed.';
}

function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [GitHub](#github)
- [Contact](#contact)
- [License](#license)

## Description
${data.description}

## Installation
To install the necessary dependencies, run the following command:
\`\`\`bash
${data.installation}
\`\`\`

## Usage
To use the application, run the following command:
\`\`\`bash
${data.usage}
\`\`\`

## Contributing
${data.contributing}

## Tests
To run tests, use the following command:
\`\`\`bash
${data.tests}
\`\`\`

## GitHub
[${data.github}](https://github.com/${data.github})

## Contact
If you have any questions, feel free to contact me at ${data.email}.

## License
${renderLicenseLink(data.license)}
`;
}

export default generateMarkdown;