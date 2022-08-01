// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge =license =>{ 
    return (!license.length)?'':
    `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  
  };              
  
  //function that returns the license link
  // If there is no license, return an empty string
  const renderLicenseLink =license => {
    return (!license.length)?'':
    '* [License](#license)';
  };
  
  // function that returns the license section of README
  // If there is no license, return an empty string
  const renderLicenseSection =license => {
    return (!license.length)?'':
    `${renderLicenseBadge(license)}`;  
  };
  
  
  // function to generate markdown for README
  const generateMarkdown = data => {
    const{title,license,description, installation, usage, contributing,tests, acknowledgments,questions,userName,}= data;
    
    return `
    # ${title}
    
    ## Description
  
    ${description}
  
    ## Table of Contents
  
    * [Installation](#installation)
    * [Usage](#usage)
    ${renderLicenseLink(license)} 
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
  
    ## Installation
  
    ${installation}
  
    ## Usage
  
    ${usage}
  
    ## License
  
    ${renderLicenseSection(license)}
  
    ## Contributing
  
    ${contributing}
  
    ## Tests
  
    ${tests}
  
    ## Acknowlegements
  
    ${acknowledgments}
  
    ## Questions
  
     Find me on GitHub:(https://github.com/${userName})<br />
    <br />
    Email: ${questions}<br /><br />
    
    
   `;
  }
  
  module.exports = generateMarkdown;
  