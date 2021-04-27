const fs = require('fs');

const path = require('path');

const notesData = require('../Develop/db/db.json');


module.exports = (app) => {

    fs.readFile("Develop/db/db.json", "utf8", (err, data) => {

        if (err) throw err;

        var notes = JSON.parse(data);
    });
    
    app.get('/api/notes', (req, res) => res.json(notesData));

    app.post('/api/index', (req,res) => {
        if (notesData.length < 5) {
            notesData.push(req.body)
            res.json(true)
        } else {
            waitList.push(req.body)
            res.json(false)
        }
    });

    app.post('/api/clear', (req,res) => {
        notesData.length = 0;

        res.json({ok: true});
    });
};