const fs = require("fs");
const path = require("path");

function createFirstFolder() {
    try {
        fs.mkdirSync("./frontend-scaffold");
        console.log("Frontend-Scaffold Created Successfully");
    } catch (error) {
        console.log("Unable to create folder due to", error);
    }
}

function createSecondFolder() {
   try {
        fs.mkdirSync("./frontend-scaffold/css");
        console.log("css folder created successfully");
   } catch (error) {
        console.log("Unable to create folder due to", error);
   }
}

function createThirdFolder() {
    try {
        fs.mkdirSync("./frontend-scaffold/js");
        console.log("js folder created successfully");
    } catch (error) {
        console.log("Unable to create folder due to", error);
    }
}

function createFourthFolder() {
    try {
            fs.mkdirSync("frontend-scaffold/images");
            console.log("images folder created successfully");            
    } catch (error) {
        console.log(error);
    }
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
    
    try {
        fs.writeFileSync(path.join("frontend-scaffold", "index.html"), htmlContent);
        console.log("index.html is created successfully");        
    } catch (error) {
        console.log("Encountered error creating file", error);
    }
}

function createCssFile() {
    const cssContent = `
    h1 {
    
        text-align:center;
        
        }    
    `;
    
    try {
        fs.writeFileSync(path.join("frontend-scaffold", "css", "style.css"), cssContent);
        console.log("style.css created successfully")        
    } catch (error) {
        console.log("Encountered error creating file", error)
    }
    
}

const createJsFile = () => {

    const jsContent = 'alert("Welcome");'
    try {
        fs.writeFileSync(path.join("frontend-scaffold", "js", "script.js"), jsContent)
        console.log("script.js created successfully")        
    } catch (error) {
        console.log("Encountered error creating file", error);
    }    
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