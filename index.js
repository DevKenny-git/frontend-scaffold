const fs = require('fs');
const path = require("path");

function createFirstFolder() {
    fs.mkdir("./frontend-scaffold", (err) => {
        if (err) return console.log(err);
        console.log("Frontend-Scaffold Created Successfully");
    });

}

function createSecondFolder() {
    fs.mkdir("./frontend-scaffold/css", (err) => {
        if (err) {
            console.log(err);
            return;
        
        }
        console.log("css folder created successfully")
    });

}

function createThirdFolder() {
    fs.mkdir("./frontend-scaffold/js", (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("js folder created successfully")
    });

}

function createFourthFolder() {
    fs.mkdir("frontend-scaffold/images", (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("images folder created successfully")
    });

}
    
function createHtmlFile() {

    const htmlContent = `
    <!DOCTYPE html>
    
    <html lang="en">
    
    <head>
    
    <meta charset="UTF-8">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="./css/style.css">
    
    <title>Document</title>
    
    </head>
    
    <body>
    
    <h1>Welcome</h1>
    
    <script src="./js/script.js"></script>
    
    </body>
    
    </html>
    `;
    
    fs.writeFile(path.join("frontend-scaffold", "index.html"), htmlContent, (err) => {
        if (err) {
            console.log(err);
            return
        }
        console.log("index.html is created successfully");
    });
}

function createCssFile() {
    const cssContent = `
    h1 {
    
        text-align:center;
        
        }    
    `;
    
    fs.writeFile(path.join("frontend-scaffold", "css", "style.css"), cssContent, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("style.css created successfully")
    });

}

const createJsFile = () => {

    const jsContent = 'alert("Welcome");'


    fs.writeFile(path.join("frontend-scaffold", "js", "script.js"), jsContent , (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("script.js created successfully")
    })
}

function createFrontendScaffold() {
    try {
        createFirstFolder();
        createSecondFolder();
        createThirdFolder();
        createFourthFolder();
        createHtmlFile();
        createCssFile();
        createJsFile();
        console.log("Frontend scaffold created successfully");
        
    } catch (error) {
        console.log("Unable to create resources", error);
    }
}

createFrontendScaffold();