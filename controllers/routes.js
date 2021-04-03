const Agendamento = require('../models/Agendamento')

module.exports = app => {
    app.get('/agendamentos', (req, res) => {
        Agendamento.listagem(res)
    });

    app.get('/agendamentos/:id', (req, res) =>{
        const id = req.params.id
        Agendamento.buscarPorId(id, res)
    })

    app.post('/agendamentos', (req, res) =>{
        const agendamento = req.body;

        Agendamento.inserir(agendamento,res);
    })
};
