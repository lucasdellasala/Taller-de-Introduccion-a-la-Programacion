// PROTOCOLO HTTP
// http://localhost:3000/

// IMPORTS
import Express from 'express'
import morgan from 'morgan'
import Bd from './bd.js'

// SETTINGS
const PORT = 3000
const app = Express()
app.use(morgan('tiny'))

// ENDPOINTS
app.get('/', (req,res)=>{
    console.table(Bd)
    res.send(Bd)
})

app.get('/:id', (req,res)=>{
    const idSolicitado = +req.params.id // o parseInt(req.params.id)

    const personaSolicitada = Bd.find((persona)=>persona.id===idSolicitado)

    console.table(Bd)
    res.status(200).send(personaSolicitada.nombre)
})

app.post('/add', (req,res)=>{
    //req.params => query params
    const id = req.query.id
    const nombre = req.query.nombre

    Bd.push({
        "id": parseInt(id),
        "nombre": nombre
    })

    console.table(Bd)
    res.status(201).send(`La persona ${nombre} ha sido agregada a la base de datos. Con el id ${id}`)
})

app.delete('/:id', (req,res)=>{
    const idSolicitado = +req.params.id // o parseInt(req.params.id)

    const personaSolicitada = Bd.find((persona)=>persona.id === idSolicitado)
    const indexPersonaSolicitada = Bd.indexOf(personaSolicitada)
    Bd.splice(indexPersonaSolicitada, 1)

    console.table(Bd)
    res.status(200).send(`La persona ${personaSolicitada.nombre} ha sido eliminada de la base de datos. Con el id ${personaSolicitada.id}`)
})

app.put('/update/', (req,res)=>{
    const idSolicitado = parseInt(req.query.id)
    const nuevoNombre = req.query.nombre

    const nuevaPersona = {
        "id": idSolicitado,
        "nombre": nuevoNombre
    }

    const personaUpdate = Bd.find((persona)=> persona.id === idSolicitado)
    const indexPersonaUpdate = Bd.indexOf(personaUpdate)
    Bd.splice(indexPersonaUpdate, 1, nuevaPersona)

    console.table(Bd)
    res.status(200).send(`Se hizo update de la persona ${personaUpdate.nombre} por ${nuevaPersona.nombre} con id ${nuevaPersona.id}`)
})

// LISTEN
app.listen(PORT, ()=>console.log('Escuchando el puerto '+ PORT))