const { where } = require("sequelize");
const {db } = require("../Database/Database");
exports.notepadService = {
    getAllNotepadDetails: function(request, response){
        return new Promise(async (resolve, rejects) => {
            try {
                const Data = db.notepad.findAll(); 
                if (!Data) {
                    throw new Error("empty data");
                }
                resolve(Data);
            } catch(error) {
                rejects(error);
            }
        });
    },
    createNotepadDetails: function(request,response) {
        return new Promise(async (resolve, rejects)=> {
            try {
                resolve (await db.notepad.create(request.body));
            } catch (error) {
                rejects(error);
            }
        });
    },
    updateNotepadDetails: function(request, response){
        return new Promise(async (resolve, rejects) => {
            try {
                const studentDetailsUpdate = {
                    id: request.body.id,
                    name: request.body.name,
                    fatherName: request.body.fatherName,
                    address: request.body.address,
                    region: request.body.region,
                    gender: request.body.gender,
                    classs: request.body.classs,
                    phone: request.body.phone,
                    email: request.body.email,
                    section: request.body.section,
                    dateOfBirth: request.body.dateOfBirth,
                    fatherOccupation: request.body.fatherOccupation,
                    addmissionDate: request.body.addmissionDate,
                    role: request.body.role ,
                    motherName: request.body.motherName
                }
                var studentIndex = null;
                this.studentDetailsList.find((studentDetailsList, index) => {
                    if(studentDetailsList.id === Number(request.params.id)){
                        studentIndex = index;
                        return true;
                    }
                });
                if (studentIndex == null){
                    throw new error({"message":"could not find data"});
                } else {
                   this.studentDetailsList[studentIndex] = studentDetailsUpdate;
                resolve({message : "updated"});
                }
                
            } catch(error) {
                rejects(error);
            }
        });

    },
    deleteNotepadDetailsById: function(id){
        return new Promise(async (resolve, rejects) => {
            try {
                
                var data = await db.notepad.findAll({where : {
                    id:id
                }});
                if (data.length == 0){
                    throw {"message":"could not find data"};
                } else {
                    await db.notepad.destroy({where : {
                        id:id
                    }});
                    resolve({message : "deleted"});
                }
            } catch(error) {
                rejects(error);
            }
        });
    }
}