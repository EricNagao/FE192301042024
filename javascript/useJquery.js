(function($){
    const h2 = $('h2');
    const div = $('.test-jquery');
    // let btn = $('[data-js="jk-bt"]').on('click', function(event){
    //     event.preventDefault();
    //     // div.animate({
    //     //     left: '500px',
    //     //     opacity: '0.2',
    //     //     width: '400px',
    //     // }, 'slow', function () {
    //     //    console.log('acabou')
    //     // }).animate({
    //     //     left: '0',
    //     //     opacity: '1',
    //     //     width: '300px',
    //     // }, 3000).animate({
    //     //     left: '500px',
    //     //     opacity: '0.2',
    //     //     width: '400px',
    //     // }, 1000).fadeOut();
    //     // console.log('fdsfasdfas')

    //     let getter = h2.text()

    //     $('.setter').text(getter);

    // });



    $('[data-js="btn"]').on('click', function(event) {
        event.preventDefault();
        const comment = $('[data-js="comment"]').val();
        $('.setter').text(comment);

        let attribute = $('.setter').addClass('data-provider');
        $('.setter').append('<hr>Teste 123');

        // $('.setter').css({
        //     'color': '#fff',
        //     'background-color': '#0000ff',
        //     'font-size': '10px',
        //     'display': 'none',
        // })

        $('.setter').hide();
        // $('.setter').remove();
        
    });
    // $('.setter').find('span').css('color', 'red')

    let divs = $('.setter').closest('.is-front').find('.divs');

    divs.each(function(index, value){
        $(value).on('mouseover', function() {
            $(this).fadeOut();
            // console.log();
        })
    });

    // $.each( divs, function( key, value ) {
    //     console.dir( key + ": " + value );
    // });
    
    // console.log(pai);

})(jQuery)