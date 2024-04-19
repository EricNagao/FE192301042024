(function() {const v = {nome: false, comentario: false, curso: false,
    };

    const form = document.querySelector('[data-js="form"]');
    const campoNome = document.querySelector('[data-js="nome"]');

    campoNome.addEventListener('keyup', function(event) {
        const nome = this.value;
        v.nome = true;
        this.style.border = '#999 solid 1px'
        this.style.outlineColor = '#999'

        if (nome.length > 10 || nome === '') {
            this.style.border = '#ff0000 solid 1px';
            v.nome = false;
            this.style.outlineColor = '#ff0000'
        }

    });
    const campoComentario = document.querySelector('[data-js="comentario"]');
    const contador = document.querySelector('[data-js="contator"]');
    campoComentario.addEventListener('input', function(event) {
        const contaCaracteres = this.value.length;
        contador.innerHTML = contaCaracteres;
        this.style.border = '#999 solid 1px'
        validacao.comentario = true;
        
        if (contaCaracteres > 50 || this.value === '') {
            this.style.border = '#ff0000 solid 1px';
            validacao.comentario = false;
        }

    });

    const campoCurso = document.querySelector('[data-js="curso"]');
    campoCurso.addEventListener('change', function(event) {
        validacao.curso = true;
        this.style.border = '#999 solid 1px'
        if (!this.value) {
            this.style.border = '#ff0000 solid 1px';
            validacao.curso = false;
        }
    });


    const btn = document.querySelector('[data-js="btn-form"]');
    btn.addEventListener('click', function(event) {
        event.preventDefault();
        let enviaForm = [];
        let i = 0;
        for(let valor in validacao) {
            enviaForm[i] = validacao[valor]
            i++;
        }
        let retorno = enviaForm.every(function(item) {
            return item === true;
        });
        if (retorno) {
            form.submit();
        }
        campoNome.focus()
    });

    /* Eventos Asincronos / Sincrono */

    // function executa() {
    //  console.log('Executou a Funão')   
    // }
    
    // setTimeout(function(){
    //     console.log('Asincronos');
    // }, 2000);

    // let id = setInterval(function(){
    //     contador.innerHTML = new Date();
    // }, 1000);

    // // clearInterval(id);

    // console.log('primeira execução');
    // executa();
    // console.log('segunda execução');

})();