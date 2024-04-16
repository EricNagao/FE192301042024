(function() {
    "use strict"

    /* Link */
    const eLink = document.querySelectorAll('[data-js="link"]');
    eLink.forEach(function(nodeLink) {
        nodeLink.addEventListener('click', function (event) {
            event.preventDefault();
            console.log(event.target.getAttribute('class'));
        });
    });

    // console.dir(eLink);
    
    /** Btn */
    const el = document.querySelector('[data-js="btn"]');
    el.addEventListener('click', function(event) {
        const eModal = document.querySelector('[data-js="modal"]');
        eModal.classList.add('modal');
    });


})();
