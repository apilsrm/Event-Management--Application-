import express from "express"
import cors from "cors"
// import bodyParser from "body-parser"
import dotenv from "dotenv"


dotenv.config({
    path: './.env'
})

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))//which origin we allow here CORS_ORIGIN=* we allow all addition ,  provide security for production level

// to handle the data files from user ,we accept json (express.json) inolder we use body-paser to accept json but its by default , use limit json  data limit according to server we set
app.use(express.json())

// app.use(bodyParser.json());

//to handle data which come from url  from user
app.use(express.urlencoded({extended: true}))

//it will deals with public assects like image pdf icon favicon
app.use(express.static("public"))







//routes import
import eventRoutes from "./routes/routes.js"
import authRoutes from "./routes/auth.js"

//routes declaration
app.use('/api/events', eventRoutes);
app.use('/api/auth', authRoutes);

app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});
// app.use("/api/v1/users", userRouter)


export { app }