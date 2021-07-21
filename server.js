const express = require('express');
const knex = require('knex')(require('./knexfile.js')['development']);
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors')

app.use(express.json())
app.use(cors());

app.get('/', function(req, res) {
    knex.select('*')
        .from('nba_teams')
        .orderBy('team_name', 'asc')
        .then(data => res.status(200).json(data))
        .catch(err =>
            res.status(404).json({
                message: 'The NBA has disbanded'
            }))
})

app.get('/:teamName', function(req, res) {
    knex.select('*')
    .from('nba_teams')
    .where({team_name: req.params.teamName})
    .then(data => res.status(200).json(data))
})

app.post('/:teamName', function(req, res) {
    knex('nba_teams')
    .where({team_name: req.params.teamName})
    .update({
        team_name: req.body.team_name,
        city: req.body.city,
        arena: req.body.arena,
        conference: req.body.conference,
        logo_url: req.body.logo_url,
        coach: req.body.coach,
        roster: req.body.roster,
        titles: req.body.titles
    })
    .then(() => res.status(201).send("Team Information Updated"))
})

app.listen(port, () => console.log(`app listening at nba-wiki-sam.herokuapp.com`))