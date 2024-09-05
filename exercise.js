import http from 'http';
import fs from "fs"

const server = http.createServer((request, response) => {
    response.end("The end of the response")
    const url = request
  //  console.log(url)

})
fs.readFile("./txt/input.txt", "utf-8" ,(error, data) => {
    console.log(data)
})


server.listen(3000, "localhost", () => {
    console.log("Listening to the 3000 port")
})