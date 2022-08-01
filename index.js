// packages needed for this application
const fs = require ('fs');
const inquirer = require ('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown')

// array of questions for user input
const promptUser = ()=> {
    return inquirer.prompt ([
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a brief description of your project'
        },
        {
            type: 'checkbox',
            name: 'Contents',
            message: 'Select your Table of Contents( Check all that apply)',
            choices: [ 'Installation', 
                         'Usage',
                         'License', 
                         'Contributing',
                         'Tests',
                         'Questions']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please describe the installation process'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe the usage of your project'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose the appropriate license for this project',
            choices: ['Apache_License_2.0',
            'GNU_General_Public_License_v3.0',
            'MIT_License',
            'Boost_Software_License_1.0',
            'Creative_Commons_Zero_v1.0_Universal',
            'Eclipse_Public_License_2.0',
            'GNU_Affero_General_Public_License_v3.0',
            'The_Unlicense']
            
        },
        {
            type: "input",
            name: "contributing",
            message: "Are there any contributors on this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a Test included?"
        },
        {
            type: "input",
            name: "acknowledgments",
            message: "Are there any acknowledgements?"
        },
        {
            type: "input",
            name: "questions",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "userName",
            message: "Please enter your GitHub username"
        },
       
    ]);
};
 
// function to write README file
const writeToFile = (fileName, data) => {
    return new Promise ((resolve, reject) => {
        fs.writeFile(fileName,data,err => {
            if (err) {
                reject(err);
                return;
            }
            resolve ({
                ok:true,
                message: 'Readme File Created!'
            });
        });
    });
};

// function to initialize app
const init = () => {
    promptUser().then (response => {
    writeToFile('./dist/README.md', generateMarkdown(response));
    });
};

// Function call to initialize app
init();
