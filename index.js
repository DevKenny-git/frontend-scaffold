const fs = require('fs');
const path = require("path");

fs.mkdir("./frontend-scaffold", (err) => {
    if (err) return console.log(err);
    console.log("Frontend-Scaffold Created Successfully");
});

fs.mkdir("./frontend-scaffold/css", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("css folder created successfully")
});

fs.mkdir("./frontend-scaffold/js", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("js folder created successfully")
});

fs.mkdir("frontend-scaffold/images", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("images folder created successfully")
});

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

const jsContent = 'alert("Welcome");'


fs.writeFile(path.join("frontend-scaffold", "js", "script.js"), jsContent , (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("script.js created successfully")
})

