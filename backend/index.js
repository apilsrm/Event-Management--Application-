
import dotenv from "dotenv"
import {app} from "./app.js"
dotenv.config({
    path: './.env'
})

// const port = process.env.PORT || 8000
const port = process.env.PORT

try {
    app.listen(port, () => {
        console.log(`⚙️ Server is running at :  http://localhost:${process.env.PORT}`);
    })
    
} catch (error) {
    console.log(`Error:${err.message}`)
}










