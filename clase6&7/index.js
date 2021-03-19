// PROTOCOLO HTTP
// http://localhost:5000/

// IMPORTS
import Express from 'express'
import morgan from 'morgan'
import Bd from './bd.js'
import expressValidator from 'express-validator'
const { query, validationResult } = expressValidator


// SETTINGS
const PORT = 5000
const app = Express()
app.use(morgan('tiny'))

// ENDPOINTS
app.get('/', (req,res)=>{
    console.table(Bd)
    res.send(Bd)
})

app.get('/:id', (req,res)=>{
    const idSolicitado = parseInt(req.params.id) // o parseInt(req.params.id)
    
    if(isNaN(idSolicitado)){
        return res.status(400).json('El id solicitado debe ser un número')
    }

    const personaSolicitada = Bd.find((persona)=>persona.id===idSolicitado)

    if(personaSolicitada == undefined){
        return res.status(404).json('El id solicitado no existe')
    }

    console.table(Bd)
    res.status(200).send(personaSolicitada.nombre)
})

app.post('/add', query('id').isNumeric(), query('nombre').isAlphanumeric(), (req,res)=>{
    //TODO: id y nombre obligatorios X
    // id tiene que ser un numero X
    // nombre tiene que ser alphanumerico X
    // nombre length > 2
    // id unico X

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const id = +req.query.id
    const nombre = req.query.nombre
    const largoNombre = nombre.split('').length

    const personaSolicitada = Bd.find((persona)=>persona.id===id)

    console.log(personaSolicitada)

    if(personaSolicitada != undefined){
        return res.status(403).json('Ya existe una persona con ese id')
    }

    if(largoNombre<3){
        return res.status(400).json(`El nombre ${nombre} es demasiado corto`)
    }

    Bd.push({
        "id": parseInt(id),
        "nombre": nombre
    })

    console.table(Bd)
    res.status(201).send(`La persona ${nombre} ha sido agregada a la base de datos. Con el id ${id}`)
})

app.delete('/:id', (req,res)=>{
    //TODO: tiene q existir el id
    const idSolicitado = +req.params.id // o parseInt(req.params.id)

    const personaSolicitada = Bd.find((persona)=>persona.id === idSolicitado)

    if(personaSolicitada == undefined){
        return res.status(404).json('El id solicitado no existe')
    }

    const indexPersonaSolicitada = Bd.indexOf(personaSolicitada)
    Bd.splice(indexPersonaSolicitada, 1)

    console.table(Bd)
    res.status(200).send(`La persona ${personaSolicitada.nombre} ha sido eliminada de la base de datos. Con el id ${personaSolicitada.id}`)
})

app.put('/update/', query('id').isNumeric(), query('nombre').isAlphanumeric(), (req,res)=>{
    //TODO: id y nombre obligatorios x
    // id tiene que ser un numero x
    // nombre tiene que ser alphanumerico x
    // nombre length > 2
    // id unico 
    // id tiene que existir X

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const idSolicitado = parseInt(req.query.id)
    const nuevoNombre = req.query.nombre
    const largoNombre = nuevoNombre.split('').length

    if(largoNombre<3){
        return res.status(400).json(`El nombre ${nuevoNombre} es demasiado corto`)
    }

    const nuevaPersona = {
        "id": idSolicitado,
        "nombre": nuevoNombre
    }

    const personaUpdate = Bd.find((persona)=> persona.id === idSolicitado)

    if(personaUpdate == undefined){
        return res.status(403).json('No existe una persona con ese id')
    }

    if(personaUpdate == undefined){
        return res.status(404).json('El id solicitado no existe')
    }

    const indexPersonaUpdate = Bd.indexOf(personaUpdate)
    Bd.splice(indexPersonaUpdate, 1, nuevaPersona)

    console.table(Bd)
    res.status(200).send(`Se hizo update de la persona ${personaUpdate.nombre} por ${nuevaPersona.nombre} con id ${nuevaPersona.id}`)
})

// LISTEN
app.listen(PORT, ()=>console.log('Escuchando el puerto '+ PORT))