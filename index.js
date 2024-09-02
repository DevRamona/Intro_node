import fs from 'fs';
// Blocking synchronous
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(textIn)


// const textOut = `What is your passion: ${textIn}\n Created on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut)
// console.log(textOut)

// Asynchronous

fs.readFile("./txt/new.txt","utf-8", (error, data1) => {
console.log(data1)
fs.readFile("./txt/${data1}.txt", "utf-8", (err, data2) => {
    console.log(data2)
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
        console.log(data3)

        fs.writeFile("./txt/final.txt", `${data2} ${data3}`, "utf-8", err => {
            console.log("Your file has been written ")
        })
    })
})
}) 
console.log("Read this file")