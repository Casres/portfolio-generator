


const inquirer = require('inquirer');


const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:'
      }
    ]);
  };

const promptProject = portfolioData => {

    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }


    console.log(`
    =================
    Add a New Project
    =================
`);

    return inquirer.prompt([
        {
            type: 'input', 
            name: 'name',
            message: 'What is the name of your project?'
        },  
        {
            type: 'input', 
            name: 'description',
            message: 'Provide a description of your project (required)'
        },
        {
            type: 'checkbox', 
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'jQuery', 'BootStrap', 'Node', 'Other']
        },
        {
            type: 'input', 
            name: 'link',
            message: 'GitHub project link (Required?'
        },  
        {
            type: 'confirm', 
            name: 'feature',
            message: 'What would you like to feature in this project?',
            default: false
        },
        {
            type: 'confirm', 
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
}

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });

// var fs = require('fs');
// const generatePage = require('./src/page-template');

// // input of the user from the command line

// // putting user command line inputs into variable names 'name' , 'github'

// // putting the user inputs that are now rep by variables into the generate page var who's value is an html with inputs that are waiting to be populated 
// const pageHTML = generatePage(name, github);

// // puts it all together by writing a file and then plugging in the information for that file and then putting a call back function for errors
// fs.writeFile('index.html', pageHTML, error => error ? console.log('error has happened') : console.log('Portfolio complete! Go to index.html to see the work!'));
