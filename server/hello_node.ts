
import * as http from "http";

const server = http.createServer(
    (req,res) =>{
        res.end("hello node!")
    }
)
server.listen(8000);