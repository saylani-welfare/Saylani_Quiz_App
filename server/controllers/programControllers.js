//Models
const Programs = require('../models/programs');

module.exports = {

    addProgram(req, res, next) {
        Programs.create(req.body)
            .then(() => { res.send({ success: true }) })
            .catch(next)
    },

    getAllPrograms(req, res, next) {
        Programs.find()
            .then((allPrograms) => { res.send(allPrograms) })
            .catch(next)
    }


}