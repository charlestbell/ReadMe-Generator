exports.markdown = (response) =>
  `[<img src="https://img.shields.io/badge/License-${response.license}-%23cdd755.svg?style=flat-square">](<${response.licenseLink}>)
# ${response.title} <!-- omit in toc -->
--- 
### Table of Contents

- [Description](#description)
  - [Technologies Used](#technologies-used)
- [Installation](#installation)
- [How to use it](#how-to-use-it)
- [Future Development](#future-development)
- [Credits](#credits)
- [How to contribute](#how-to-contribute)
- [Tests](#tests)
- [License](#license)

## Live Site
[View Now](${response.liveSite})

## Description
${response.description}

___Technologies Used___
- ${response.tech1}
- ${response.tech2}
- ${response.tech3}


___Motivation___
${response.motivation}

## Installation
${response.installation}

## How to use it
${response.usage}

## Future Development
${response.future}

### Credits
Developers: ${response.credits}
### How to contribute
${response.contributions}

### Tests
${response.tests}

### License
#####${response.license}
[Link to ${response.license} licence](${response.licenseLink})

### Questions
If you have a question about this software, contact the developer at:
${response.email}

![Screenshot](Assets/screenshot.jpg "Screenshot")
`;
