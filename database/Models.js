const mongoose = require('mongoose')
const {Lectures, Attandance} = require('./Schemas')


const LectureModel = mongoose.model('lectures', Lectures);
const AttandanceModel = mongoose.model('attandance', Attandance);
mongoose.models = {}

module.exports = {LectureModel, AttandanceModel};