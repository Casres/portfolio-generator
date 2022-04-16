




// process is like document
// argv = arguments
// slice is removing the parts of an array that is not needed, 
// the before and after parts of the needed items of an array
var fs = require('fs');

var profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

const generatePage = (userName, githubName) => {
    return `
        <!DOCTYPE html> 
        <html lang="en"> 
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Portfolio Demo</title>
        </head>

        <body>
            <h1>${name}</h1>
            <h2><a href="https://github.com/${github}">Github</a></h2>
        </body>
        </html>
        `;
  };

fs.writeFile('index.html', generatePage(), error => error ? console.log('error has happened') : console.log('Portfolio complete! Go to index.html to see the work!'));
