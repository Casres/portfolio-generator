



const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
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

const copyFile = () => {
    return new promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Stylesheet Created!'
            })
        });
    });
};

// sending the information from this page out
module.exports = { writeFile, copyFile };