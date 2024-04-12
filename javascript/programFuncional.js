function operacao(num1, num2, operador = '+'){
    var n1 = +num1;
    var n2 = +num2;
    var result;
    if (!n1 || !n2) {
        console.log('Erro: não é um numero');
        return;
    }
    switch (operador) {
        case '+': 
            result = n1 + n2;
        break;
        case '-':
            result = n1 - n2;
        break;
        default:
            result = n1 + n2;
        break
    }
    return result;
}

function carrinhoCompra(cliente, callback) {
    var produto1 = 50;
    var produto2 = 54;

    var result = operacao(produto1, produto2);
    console.log(callback(cliente));
    console.log('Compra: ', result ? result : '00');
}

carrinhoCompra('Joaquim da Silva', function (message) {
   return `Olá, seja bem vindo(a) - ${message}`;
});

carrinhoCompra(
    'Joaquim da Silva',
    message => `Olá, seja bem vindo(a) - ${message}`
);



console.log('Mensagem arrow function: ', func('test123'));

// var total = operacao('125', '124');
// console.log('soma = ', total ? total : '00')
