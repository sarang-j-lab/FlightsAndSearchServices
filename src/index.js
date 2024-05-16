const express = require('express')
const {PORT} = require("./config/serverConfig.js")
const bodyParser = require('body-parser')

const ApiRoutes = require('./routes/index')

const setupAndStartServer = ()=>{
    const app = express()

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    
    app.use('/api', ApiRoutes)
    
    
    app.listen(process.env.PORT,()=>{
        console.log(`server started at ${PORT}`)
        
    })
}

setupAndStartServer()