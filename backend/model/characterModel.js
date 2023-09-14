const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    maxtop: { type: Number, required: true },
    mintop: { type: Number, required: true },
    maxleft: { type: Number, required: true },
    minleft: { type: Number, required: true },
    character: { type: String, required: true },
})

exports.Character = mongoose.model('Characters', CharacterSchema);