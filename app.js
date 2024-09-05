import http from 'http';
import fs from "fs"
import _ from 'lodash';

const server = http.createServer()

server.on("request", (request, response) => {
    const readable = fs.createReadStream("input.txt")
    readable.on("data", chunk => {
        response.write(chunk)
    })
    readable.on("end" , () => {
        response.end()
    } )
})
server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});