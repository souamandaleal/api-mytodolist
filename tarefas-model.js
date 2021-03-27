const mongoose = require('mongoose')
const Schema = mongoose.Schema

let TarefaSchema = new Schema({
    descricao: {type: String, required: true},
    prazo: {type: Number, required: false},
    completa: {type: Boolean, required: false}
})

module.exports = mongoose.model('Tarefas', TarefaSchema)
