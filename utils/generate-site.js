



const { ifError } = require('assert');
const fs = require('fs');

// writes the index.html file in the dist folder
fs.writeFile('./dist/index.html', pageHTML, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Page created! Check out index.html in this directory to see it!');
});

// copies style.css to the dist file
fs.copyFile('./src/style.css', './dist/style.css', err => {
    // error handling
    if (err) {
        console.log(err);
        return;
    }
    // on success
    console.log('Style sheet has been copied!');
});


const writeFile = fileContent => {
    return new promises((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if things go south, reject the Promise and 
            // send the error to the Promise's '.catch()' method
            if (err) {
                reject(err);
                return;
            }
            // if everything goes well, resolve the Promise and 
            // send the successful data to the '.then()' method
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

writeFile()
.then(() => console.log())
.catch((err) => console.log(err, 'GREAT SCOTT!! An error has been caught!!'));