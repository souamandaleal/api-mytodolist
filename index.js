const express = require("express")
const mongoose = require("mongoose")

const tarefa_controller = require('./tarefas-controller')

mongoose.connect('mongodb+srv://admin:NIrZOc40nddaxnjN@cluster0.mxezb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.Promise = global.Promise
try {
    let db = mongoose.connection
    db.on('errr', console.error.bind(console, 'erro de conexao no banco'))
} catch (e) {
    console.log(e)
}

const router = express.Router()

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('ESTA EH A API DO MY TO DO LIST PARA A DISCPLINA GCC129')
})

router.post('/tarefas', tarefa_controller.cadastrarTarefa)
router.get('/tarefas', tarefa_controller.listarTarefas)
router.get('/tarefas/:id', tarefa_controller.buscarTarefa)

app.use('/', router)


let porta = process.env.PORT || 4000

app.listen(porta, () => {
    console.log("servidor em execucao na porta " + porta)
})