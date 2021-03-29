    var Tarefas = require('./tarefas-model')

    exports.cadastrarTarefa = function (req, res) {
        let tarefa = new Tarefas({
            descricao: req.body.descricao,
            prazo: req.body.prazo,
            completa: req.body.completa     
        })
        tarefa.save(function (err){
            if (err) {
                return next(err) 
            }
        })
        res.send('tarefa cadastrada com sucesso')
    }

    exports.listarTarefas = function (req, res) {
        Tarefas.find({}, function (err, tarefas) {
            if (err) return next(err)
            return res.json(tarefas)
        })
    }

    exports.buscarTarefa = function (req, res) {
        Tarefas.findById(req.params.id, function(err, tarefa){
            if (err) return next(err)
            return res.json(tarefa)
        })
    }

   exports.deletarTarefa = function (req, res) {
        Tarefas.deleteOne({_id: req.params.id}, (err) => {
            //Retornar erro quando não conseguir apagar no banco de dados
            if(err) return res.status(400).json("Error: Tarefa não foi apagada com sucesso!")

            //Retornar mensagem de sucesso quando excluir o registro com sucesso no banco de dados
            return res.json("Tarefa excluida com sucesso!")
        })
    }

   exports.alterarTarefa = function (req, res) {
    Tarefas.findById(req.params.id, function(err, tarefa){
            if (err) return next(err)

            tarefa.descricao = req.body.descricao;
            terefa.prazo = req.body.prazo;
            tarefa.completa = req.body.completa;
            
            tarefa.save(function (err){
                if (err) {
                    return next(err) 
             }
            })

            return res.json("Tarefa alterada com sucesso!")

        })
}
