// PROTOCOLO HTTP
// http://localhost:7000/

// IMPORTS
import Express from 'express'
import morgan from 'morgan'
import {Trainers, Types} from './bd.js'

// SETTINGS
const PORT = 7000
const app = Express()
app.use(morgan('tiny'))

// ENDPOINTS
app.get('/', (req,res)=>{
    Trainers.map((trainer)=>{
        trainer.level = Math.floor(Math.random() * 11)
        trainer.type = Types[Math.floor(Math.random() * 18)]
    })
    console.table(Trainers)
    res.send(Trainers)
})

// LISTEN
app.listen(PORT, ()=>console.log('Escuchando el puerto '+ PORT))