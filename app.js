




var fs = require('fs');
const generatePage = require('./src/page-template');

// input of the user from the command line
var profileDataArgs = process.argv.slice(2);

// putting user command line inputs into variable names 'name' , 'github'
const [name, github] = profileDataArgs;

// putting the user inputs that are now rep by variables into the generate page var who's value is an html with inputs that are waiting to be populated 
const pageHTML = generatePage(name, github);

// puts it all together by writing a file and then plugging in the information for that file and then putting a call back function for errors
fs.writeFile('index.html', pageHTML, error => error ? console.log('error has happened') : console.log('Portfolio complete! Go to index.html to see the work!'));
