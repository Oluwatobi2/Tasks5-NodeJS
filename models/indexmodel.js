const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
    name: String,
    course: String,
    year: String
});

const crudTask = mongoose.model('crude', newSchema);

module.exports = { crudTask };
