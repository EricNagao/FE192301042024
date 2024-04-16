(function() {
    "use strict"

    const eLink = document.querySelector('.link2');
    // eLink.onclick = function (event) {
    //     alert('fui clicado test 123')
    // };

    eLink.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        alert('Clicou no link');
    });

    eLink.parentElement.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Clicou na DIV');
    })
    console.dir(eLink);
    /* Link */
    // const eLink = document.querySelectorAll('[data-js="link"]');
    // eLink.forEach(function(nodeLink) {
    //     nodeLink.addEventListener('click', function (event) {
    //         event.preventDefault();
    //         console.log(event.target.getAttribute('class'));
    //     });
    // });

    // Modal
    const eModal = document.querySelector('[data-js="modal"]');

    /** Button open */
    const el = document.querySelector('[data-js="btn"]');
    el.addEventListener('click', function(event) {
        eModal.classList.remove('modal-hidden');
        eModal.classList.add('modal');
    });

    /* Button close */
    const elClose = document.querySelector('[data-js="btn-close"]');
    elClose.addEventListener('click', function(event) {
        eModal.classList.remove('modal');
        eModal.classList.add('modal-hidden');
    });


})();

function cliqueMe() {
    alert('ola fui clicado');
}
