const express = require('express');
const bodyParser = require('body-parser');

const { notepadController } = require('./Controller/NotepadController');
database = require("./Database/Database");

global.returnResponse = function (request, response, promise){
    response.type("application/json");
    promise.then(result => {
        response.status(200);
        response.json(result);
    }).catch(err => {
        response.status(500);
        response.json(err.message || err);
    });
};

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(async function (req, res, next) {
    if (!database.isConnectionCreated) {
      await database.init();
      if (!database.isConnectionCreated) {
        res.status(500);
        res.json({ message: database.errorMessage });
        return;
      }
    }
    next();
});

var notepadRouter = express.Router();

app.use("/notepad", notepadController.init(notepadRouter));
app.listen(3000);
