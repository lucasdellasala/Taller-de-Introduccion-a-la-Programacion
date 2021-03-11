import Express from 'express'
import morgan from 'morgan'
import Bd from './bd.js'

const PORT = 3000

const app = Express()
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    console.log('Solicitud de todas las personas')
    res.status(200).send(
        Bd
    )
    //Me tira un 304, ??
})

app.get('/:id', (req, res) => {
    const idSolicitado = parseInt(req.params.id)

    const personaSolicitada = Bd.find(
        (persona) => persona.id === idSolicitado
    )

    console.log('Solicitud de la persona de id: ' + idSolicitado + '.')

    res.status(200).send(
        personaSolicitada
    )
    //Me tira un 304, ??
})

app.post('/add', (req, res) => {
    const id = req.query.id
    const name = req.query.name

    Bd.push({
        "id": parseInt(id),
        "name": name
    })

    console.log('Nuevo registro en base de datos con id: ' + id + ', name: ' + name)
    console.table(Bd)

    res.send('Nuevo registro en base de datos con id: ' + id + ', name: ' + name)
})

app.delete('/:id', (req, res) => {
    const idSolicitado = parseInt(req.params.id)

    const personaDelete = Bd.find((persona) => persona.id === idSolicitado)
    const indexPersonaDelete = Bd.indexOf(personaDelete)
    Bd.splice(indexPersonaDelete, 1)

    console.log('Base de datos actualizada. Persona con id: ' + idSolicitado + ' eliminada.')
    console.table(Bd)

    res.send('Base de datos actualizada. Persona con id: ' + idSolicitado + ' eliminada.')
})

app.put('/update/', (req, res) => {
    const idSolicitado = parseInt(req.query.id)
    const newName = req.query.name

    const newPerson = {
        "id": idSolicitado,
        "name": newName
    }

    const personaUpdate = Bd.find((persona) => persona.id === idSolicitado)
    const indexPersonUpdate = Bd.indexOf(personaUpdate)
    Bd.splice(indexPersonUpdate, 1, newPerson)

    console.log('Registro de la base de datos con id: ' + idSolicitado + ' actualizado.')
    console.table(Bd)

    res.send('Registro de la base de datos con id: ' + idSolicitado + ' actualizado.')
})

app.listen(PORT, () => console.log('Listen on port ' + PORT))