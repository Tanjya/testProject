const fs = require('fs');
//! for write file
try {
    fs.writeFileSync("file.txt", "Hello world");
    console.log("THIS FILE IS SAVED!!");
} catch (err) {
    console.error("ERROR WRITING FILES: ", err);
}

//! for read file
try {
    fs.readFile("./file.txt", "utf8", (data) => {
        console.log(data);
    })
} catch (err) {
    console.error("ERROR READING FILE: ", err);
}