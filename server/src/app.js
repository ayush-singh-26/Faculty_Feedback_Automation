import express from 'express'
import cookieParser from 'cookie-parser'

const app=express();

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static("public"))
app.use(cookieParser())


import errorHandler from './utils/ErrorHandler.js'

app.get('/',(req,res)=>{
    res.send("Welcome to my Faculty feedback automation page")
})


app.use(errorHandler)
export {app}