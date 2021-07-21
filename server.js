const express = require('express');
const knex = require('knex')(require('./knexfile.js')['development']);
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors')

app.use(express.json())
app.use(cors());

app.get('/', function(req, res) {
    knex.select('*')
        .from('helmets')
        .then(data => res.status(200).json(data))
        .catch(err =>
            res.status(404).json({
                message: 'No helmets'
            }))
})

app.listen(port, () => console.log(`app listening at nba-wiki-sam.herokuapp.com`))