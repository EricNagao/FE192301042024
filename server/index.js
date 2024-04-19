let express = require('express');
let app = express();
let cors = require('cors')

app.use(cors());
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('<h1>Testando meu servidor, test 123</h1>');
})

app.get('/cursos', function(req, res) {
    let jsonTest = {name:  'Eduardo'}
    res.header("Content-Type", "application/json")
    // res.status(400)
    res.json(jsonTest);
})

app.get('/login/:user', function(req, res) {
    console.log(req.params.user);
    console.log('Logado com sucesso, log servidor ...');

    let data = {
        cep: req.params.user,
        logradouro: "Avenida Nove de Julho",
        bairro: "Parque Residencial Cocaia",
        localidade: "São Paulo",
      }
    res.json(data);
})

app.post('/cadastro', function(req, res) {
    let data  = req.body;
    console.log(data);
    res.redirect('http://127.0.0.1:5500/index.html#form');
    // res.json({status: true})
})

app.post('/cadastro-login', function(req, res) {
    let data  = req.body;
    console.log(data);
    res.status(200)
    res.send('Sucesso...')
})


app.listen('3000', '127.0.0.1', function() {
    console.log(`http://127.0.0.1:3000/`)
})