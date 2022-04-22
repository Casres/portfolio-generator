

const fs = require('fs');
const generatePage = require('./src/page-template');
const inquirer = require('inquirer');


const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name? *',
        validate: nameInput => {
            if (nameInput) {
                return true 
            } else {
                console.log("Please write your name");
                return false
            }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username *', 
        validate: nameInput => {
            if (nameInput) {
                return true 
            } else {
                console.log("Please write your GitHub name");
                return false
            }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to provide some information about yourself *:',
        default: true
      },

      {
          type: 'input',
          name: 'about',
          message: 'What would you like the world to know?',
          when: ({confirmAbout}) => {
              if (confirmAbout) {
                  return true;
              } else {
                  return false;
              }
          }
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
            message: 'What is the name of your project? *',
            validate: nameInput => {
                if (nameInput) {
                    return true 
                } else {
                    console.log("Please write the project name");
                    return false
                }
            }
        },  
        {
            type: 'input', 
            name: 'description',
            message: 'Provide a description of your project *',
            validate: nameInput => {
                if (nameInput) {
                    return true 
                } else {
                    console.log("Please write a description of the project");
                    return false
                }
            }
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
            message: 'GitHub project link *',
            validate: nameInput => {
                if (nameInput) {
                    return true 
                } else {
                    console.log("Please write the projects link from GitHub"); 
                    return false
                }
            }
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
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
      return generatePage(portfolioData);
  })
  .then(pageHTML => {
      return fs.writeFile(pageHTML);
  })
  .then(writeFileResponse => {
      console.log(writeFileResponse);
      return fs.copyFile();
  })
  .then(copyFileResponse => {
      console.log(copyFileResponse);
  })
  .catch(err => {
      console.log(err);
  });
