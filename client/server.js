import express from 'express'
import db from './backendNode/config/Database'
const app = express();

try {
    await db.authenticate()
    console.log("database connect")
} catch (error) {
    console.log(error)
}


app.listen(5173, () => console.log(`server running at port 5173`))