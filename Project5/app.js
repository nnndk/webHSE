const express = require('express')
const path = require("path")
const bodyParser = require('body-parser')

const dbClient = require("./data/movieDbClient")

const app = express()
const port = 1234

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// статика (css, картинки)
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})

app.get('/index2', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index2.html'))
})

app.get('/api/getAllMovies', async (req, res) => {
    const result = await dbClient.getAllMovies()
    res.send(result.rows)
})

app.post('/api/addMovie', async (req, res) => {
    const a = req.body
    await dbClient.addMovie(req.body)
    res.sendFile(path.join(__dirname, 'views/index2.html'))
})

app.delete('/api/deleteMovie/:id', async (req, res) => {
    const { id } = req.params;
    await dbClient.deleteMovie(id)
    res.sendFile(path.join(__dirname, 'views/index2.html'))
})

app.get('/updateMovie/:id', async (req, res) => {
    res.sendFile(path.join(__dirname, 'views/updateMovie.html'))
})

app.get('/api/getSingleMovie/:id', async (req, res) => {
    const { id } = req.params;
    const result = await dbClient.getSingleMovie(id)

    res.send(result.rows[0])
})

app.put('/api/updateMovie', async (req, res) => {
    await dbClient.updateMovie(req.body)
    res.redirect("/index2")
})

app.listen(port, () => {
    console.log(`Запуск сервера по адресу http://localhost:${port}`)
})
