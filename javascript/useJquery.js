(function($){
    const h2 = $('h2');
    const div = $('.test-jquery');
    let btn = $('[data-js="jk-bt"]').on('click', function(event){
        event.preventDefault();
        div.animate({
            left: '500px',
            opacity: '0.2',
            width: '400px',
        }, 'slow', function () {
           console.log('acabou')
        }).animate({
            left: '0',
            opacity: '1',
            width: '300px',
        }, 3000).animate({
            left: '500px',
            opacity: '0.2',
            width: '400px',
        }, 1000).fadeOut();
        console.log('fdsfasdfas')
    });

    // h2.hide();
    
    
    // console.log(div);


})(jQuery)