const express= require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {User} = require('./models');

let app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Routes
app.post('/create', async (req, res) => {
    let reqs = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        'createdAt': new Date(),
        'updatedAt': new Date()
    });

    if (reqs) {
        res.send(JSON.stringify({'O usuário foi criado com sucesso!': reqs}));
    }

});

//Start server
let port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

//Rota para Listar
app.get('/list', async (req, res) => {
    try {
    const users = await User.findAll({
        attributes: ['id', 'name', 'email', 'password']
    });
    res.json(users);
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        res.status(500).json({ error: 'Erro ao listar usuários' });
    }
});