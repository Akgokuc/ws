const express = require('express')
const http = require('http')
const {Server} = require('socket.io')
const path = require('path')

const app = express()
const server = http.createServer(app)
const io = new Server(server)
const PORT = 9000

app.use(express.static(path.resolve('./public')))

// Websocket functionality
io.on('connection',socket =>{
    console.log('New connection made',socket.id)

    socket.on('user-message', message => {
        console.log('User message: ',message)

        io.emit('message',message)
    })
})

// Route declaration
app.get('/',(req,res)=>{
    return res.sendFile('./public/index.html')
})

server.listen(PORT, () => console.log(`server started at PORT: ${PORT}`))


 