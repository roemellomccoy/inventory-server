const express = require('express');
const knex = require('knex')(require('./knexfile.js')['development']);
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors')

app.use(express.json())
app.use(cors());

nameObject = {
    'name': 'Your name'
}

app.get('/', function(req, res) {
    res.send({
        'name': nameObject.name
    })
})

app.patch('/', function(req, res){
    nameObject.name = req.body.newName
    res.send({
        message:
            'Your name has changed'
    })
})

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

app.delete('/chests', function(req, res) {
    knex('chests')
    .del()
    .where({id: req.body.id})
    .then(data => res.status(200).json(data))
        .catch(err =>
            res.status(404).json({
            message:
                'Armor could not be found'}))
})

app.delete('/helmets', function(req, res) {
    knex('helmets')
    .del()
    .where({id: req.body.id})
    .then(data => res.status(200).json(data))
        .catch(err =>
            res.status(404).json({
            message:
                'Armor could not be found'}))
})

app.delete('/arms', function(req, res) {
    knex('arms')
    .del()
    .where({id: req.body.id})
    .then(data => res.status(200).json(data))
        .catch(err =>
            res.status(404).json({
            message:
                'Armor could not be found'}))
})

app.delete('/legs', function(req, res) {
    knex('legs')
    .del()
    .where({id: req.body.id})
    .then(data => res.status(200).json(data))
        .catch(err =>
            res.status(404).json({
            message:
                'Armor could not be found'}))
})

app.post('/chests', function(req, res) {
    knex('chests')
    .insert({ name: req.body.name, weight: req.body.weight, armor: req.body.rating })
    .then(data => res.status(200).json(data))
    .catch(err =>
        res.status(404).json({
            message:
                'You cannot add this armor'
        }))
})

app.post('/helmets', function(req, res) {
    knex('helmets')
    .insert({ name: req.body.name, weight: req.body.weight, armor: req.body.rating })
    .then(data => res.status(200).json(data))
    .catch(err =>
        res.status(404).json({
            message:
                'You cannot add this armor'
        }))
})

app.post('/arms', function(req, res) {
    knex('arms')
    .insert({ name: req.body.name, weight: req.body.weight, armor: req.body.rating })
    .then(data => res.status(200).json(data))
    .catch(err =>
        res.status(404).json({
            message:
                'You cannot add this armor'
        }))
})

app.post('/legs', function(req, res) {
    knex('legs')
    .insert({ name: req.body.name, weight: req.body.weight, armor: req.body.rating })
    .then(data => res.status(200).json(data))
    .catch(err =>
        res.status(404).json({
            message:
                'You cannot add this armor'
        }))
})

app.listen(port, () => console.log(`app listening at inventory-server-ram.herokuapp.com`))