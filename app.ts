import express ,{Request,Response} from "express";
import env from "dotenv"
import dataSource from "./Database/dbConfig.js";

env.config()

const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send("hello world");
})


dataSource.initialize().then(()=>{
    console.log('connected to db')
}).catch((err)=>{
    console.log('Failed to connect to DB: ' + err)
})

app.listen(PORT,()=>{
    console.log(`this server is running on http://127.0.0.1:${PORT}`)
})
