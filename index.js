import fs from 'fs';
import http from "http"
const server = http.createServer((req, resp) => {
    console.log(req.url, req.method)
    resp.setHeader("Content-Type", "text/html")

    let path = "./views/"
    switch(req.url) {
        case '/':
            path += "index.html"
            break;
            case "/about":
            path += "about.html"
            break;
            case "/service":
            path += "service.html"
            break;
            case "/about-us":
                resp.statusCode = 301
                resp.setHeader('location', "/about")
                resp.end()
            default :
            path += "404.html"
            break
    }
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err)
            resp.end()
        } else {
            resp.end(data)
            
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log("Listening to port 3000")
}) 