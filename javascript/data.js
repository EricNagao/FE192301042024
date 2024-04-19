(function(){
    'use strict'
    let data = new Date();
    // let data = new Date('2012-08-25');
    let data2 = new Date(1995, 11, 15, 3, 25, 35);
    // let diames = data.getDate();
    // let ano = data.getFullYear();
    // let mes = data.getMonth();
    // let meses = ['Jan', 'Fev', 'Mar', 'Abr'];
    // console.log(diames + '/' + meses[mes] +  '/' + ano);
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    const dataBr = data.toLocaleDateString('pt-BR', {});
    console.log(data);
    const calc = (data.getTime() - data2.getTime()) / 1000 / 60 / 60 / 24 / 366;
    console.log(Math.trunc(calc) + 'anos');
    console.dir(data);

})()