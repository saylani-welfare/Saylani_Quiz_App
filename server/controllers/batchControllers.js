//model
const Batches = require("../models/batches");
const Programs = require('../models/programs');


module.exports = {

    addBatch(req, res, next) {
        const batch = req.body.batch;
        const programName = req.body.program_name;

        Programs.findOne({ program: programName }, function (err, founded) {

            Batches.create({
                batch: batch,
                program_id: founded._id
            })
                .then(() => { res.send({ success: true }) })
                .catch(next)
        })
            .catch(next)
    }
}



