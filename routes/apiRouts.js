const path = require('path');
const notesData = require('../Develop/db/db.json');

module.exports = (app) => {
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