import express from "express";

const app = express();
app.get("/", (request, response) => {
    response.status(200).json({message:"Hello from the server side", app:"naptours"})
})

app.get("/about", (request, response) => {
    response.status(200).json({message:"Hello from the about section", app:"test"})
})
const port = 3000
app.listen(port, () =>{
    console.log("appp running on the port") 

})                                                                                                                                                                                                                                                                    