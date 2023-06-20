//importações
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let cors = require('cors');
const mysql = require('mysql2');

//impotação de rotas
let AlunoRouter = require('./routes/aluno');
let aulaRouter = require('./routes/aula');
let carroRouter = require('./routes/carro');
let professorRouter = require('./routes/professor');

//declarando express
let app = express();

//middleware(traduções)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//cors configurando a rota para o front
const corsOption = {
  origin: '*',
};

app.use(cors(corsOption));

//banco de dados
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'localhost',
  password: '1234',
  database: 'projeto',
})

connection.connect();

//rotas
app.use('/aluno', AlunoRouter);
app.use('/aula', aulaRouter);
app.use('/carro', carroRouter);
app.use('/professor', professorRouter);



// log de inicialização
console.log('Servidor iniciado na porta 3000');

module.exports = app;


