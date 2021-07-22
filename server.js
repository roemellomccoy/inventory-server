const express = require('express');
const knex = require('knex')(require('./knexfile.js')['development']);
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors')

app.use(express.json())
app.use(cors());

app.get('/helmets', function(req, res) {
    knex.select('*')
        .from('helmets')
        .then(data => res.status(200).json(data))
        .catch(err =>
            res.status(404).json({
                message: 'No helmets'
            }))
})

app.get('/chests', function(req, res) {
    knex.select('*')
        .from('chests')
        .then(data => res.status(200).json(data))
        .catch(err =>
            res.status(404).json({
                message: 'No chests'
            }))
})

app.get('/arms', function(req, res) {
    knex.select('*')
        .from('arms')
        .then(data => res.status(200).json(data))
        .catch(err =>
            res.status(404).json({
                message: 'No arms'
            }))
})

app.get('/legs', function(req, res) {
    knex.select('*')
        .from('legs')
        .then(data => res.status(200).json(data))
        .catch(err =>
            res.status(404).json({
                message: 'No legs'
            }))
})

app.listen(port, () => console.log(`app listening at inventory-server-ram.herokuapp.com`))