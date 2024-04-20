(function() {
    'use strict'

    

      const promiseA = new Promise((resolucaoFunc, reject) => {
        resolucaoFunc('test 123');
      });
      promiseA.then((val) => console.log("log assíncrono tem val:", val));
      console.log('celso');
      // Neste ponto, "promiseA" já está liquidado.
      console.log("log imediato");
      console.log('celso fim');


    /* Promise */
    let promise = new Promise((resolve, reject) => {
        let nome  = 'celso';
        if (nome.length > 7 ) {
            return reject({
                reponse: false,
            });
        }
        else {
            return resolve({
                reponse: true,
            });
        }
    });

    promise.then((result) => {
        console.log(result.reponse);
    }).catch((error) => {
        console.log(error.reponse);
    })

    

    // document.addEventListener('DOMContentLoaded', function() {
    //     // alert('DOMContentLoaded');
    // })

    // window.onload = function () {
    //     // alert('onload');
    // }

    // const header = document.querySelector('header');
    // const array = [10,50,25,36,85];
    // let acumulador = 0;
    // array.forEach(function(item, index, array) {
    //     if (item >= 5) {
    //         array[item] =  item + 1;
    //     }
    //     array[item] = item - 1;

    //     header.innerHTML = item;
    //     acumulador = item++;
    // });

    // console.log(array);
    // let texto =  'Lorem ipsum, volutas sit amet consectetur adipisicing elit. Laudantium et  facere, ab eaque sapiente quo, dolorum perspiciatis magnam nobis, dolor vitae aut debitis Voluptas non amet repellat ratione modi! Ab dolorem sunt delectus cum rerum temporibus volu2taskhj doloremque minima adipisci voluxtas, atque dignissimos consequatur sit aspernatur explicabo veniam vel corporis?';
    // let er = /volu[a-z0-9]?tas/gi;
    // let newtext = texto.replace(er, 'lindoooo');
    // console.log(newtext);


    // let regex = new RegExp('volu[a-z0-9]?tas', 'gi');
    // regex.test(texto); // true
    // texto.match(regex) // ['volutas', 'Voluptas', 'volu2tas', 'voluxtas']


})();