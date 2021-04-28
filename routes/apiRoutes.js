const fs = require('fs');
const path = require('path');
const uuid = require("uuid");

module.exports = (app) => {

        app.get('/api/notes', (req, res) => {
            fs.readFile("./db/db.json", "utf8", (err, data) => {

                if (err) throw err;
                console.log(data)

                return res.json(JSON.parse(data)) //turns it into a JS object aka array
            })
        });


        app.post('/api/notes', (req, res) => {
            let newNote = req.body
            fs.readFile("./db/db.json", "utf8", (err, data) => {

                if (err) throw err;
                console.log(newNote)
                let notes = JSON.parse(data) //now array
                newNote.id = uuid.v4() //object, how to add properties to objects newNote["id"]
                notes.push(newNote) //Array -> object
                fs.writeFile("./db/db.json", JSON.stringify(notes), "utf8", (err, data) => {
                    return res.json(newNote)
                })

            })
        });

        app.delete('/api/notes/:id', (req, res) => {
        const id = req.params.id;
        notes.forEach((n, index) => {
          if(id == n.id){
            notes.splice(index,1)
            const notesCopy = notes.slice();
            let jsonNotes = JSON.stringify(notesCopy)
            fs.writeFile("./db/db.json", jsonNotes, function(err) {
              if (err) {
                return console.log(err);
              }
              console.log("Success!");
            })
    
          }
        })
        res.json(true);
      })
    };



//     app.delete('/api/notes/:id', function (req, res) => {
//         var id = req.params.id;
//         let found;

//         fs.readFile("./db/db.json", "utf8"), (err, data)
        
//         app.db('tasks').remove({
//             id: id
//         });
//         return res.status(201).end();
//     });
// };