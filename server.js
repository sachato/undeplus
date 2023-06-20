const express = require('express')
const cors = require('cors')

// PARAM API
const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



// PARAM ROUTER
/******************************/
/*** Mise en place du routage */

app.get('/', (req, res) => res.send(`Couxou les CDA22 !! TEST OK`))


app.get('*', (req, res) => res.status(501).send('What the hell are you doing !?!'))


// START API SERVER

app.listen(process.env.SERVER_PORT, () => {
    console.log(`This server is running on port ${process.env.SERVER_PORT}. Have fun !`)
})
