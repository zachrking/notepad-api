const { response } = require('express');
const { notepadService } = require('../Service/NotepadService');

exports.notepadController = {
    init: function (notepadRouter) {

        //get all student details
        notepadRouter.get("", (request, response) =>  returnResponse(request, response, 
            notepadService.getAllNotepadDetails(request, response)));
        
        //create student details
        notepadRouter.post("", (request, response) => returnResponse(request, response, 
            notepadService.createNotepadDetails(request, response)));
        
        //update the student details
        notepadRouter.put("/:id", (request, response) => returnResponse(request, response, 
            notepadService.updateNotepadDetails(request, response)));   

        //delete student details by id
        notepadRouter.delete("/:id", (request, response) => returnResponse(request, response, 
            notepadService.deleteNotepadDetailsById(request.params.id, response)));

        return notepadRouter;
    }

};