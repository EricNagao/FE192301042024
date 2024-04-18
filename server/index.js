let express = require('express');
let app = express();
let cors = require('cors')

app.use(cors());

app.get('/', function(req, res) {
    res.send('<h1>Testando meu servidor, test 123</h1>');
})

app.get('/cursos', function(req, res) {

    let jsonTest = {name:  'Eduardo'}
    res.json(jsonTest);
})

app.get('/login:test', function(req, res) {
    console.log(req.params.test);
    res.send('<h1>Lista de Cursos</h1>');
})

app.listen('3000', '127.0.0.1', function() {
    console.log(`http://127.0.0.1:3000/`)
})