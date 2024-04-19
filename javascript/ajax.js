(function(){
    'use strict'

    let ajax = new XMLHttpRequest();
    let url = 'http://127.0.0.1:3000/cadastro-login';
    ajax.open("POST", url, true);
    ajax.setRequestHeader('Content-Type', 'application/json');
    ajax.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
        }
    }

    const data = JSON.stringify({login: 'carlos', senha: 1245465});

    ajax.send(data);



    // let ajax = new XMLHttpRequest();
    // let url = 'http://127.0.0.1:3000/cadastro';
    // ajax.open("POST", url, true);
    // ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // ajax.onreadystatechange = function() {
    //     if (this.readyState === 4 && this.status === 200) {
    //         console.log(this.responseText);
    //     }
    // }
    // ajax.send("login=celso&senha=12345");




    // function sendRequisicao(p) {
    //     let ajax = new XMLHttpRequest();
    //     let url = 'http://127.0.0.1:3000/cursos';
    //     // let url = 'http://127.0.0.1:5500/data.txt';
    //     p.innerHTML = 'esperando resposta....';
    //     ajax.onreadystatechange = function() {
    //         if (this.readyState === 4 && this.status === 200) {
    //             // let data = JSON.parse(this.responseText);
    //             // p.innerHTML = this.responseText;

    //             console.log(this.responseText);
    //         } else if (this.readyState === 4 && this.status === 404) {
    //             console.log('Erro na requisição')
    //         }
    //     }
    //     ajax.open("GET", url, true);
    //     ajax.send();

    // }   
    // const leiaMais = document.querySelector('.leia-mais');
    
    // const mapping = document.querySelector('.main-padding');
    // let p = mapping.querySelector('p');
    
    
    // leiaMais.addEventListener('click', function(event) {
    //     sendRequisicao(p);
    // })

    // console.log(ajax);

})()