(function(Pet, Product){
    'use strict'

    /**
     * Objeto para criar um carrinho de compra
     * @param {string} selector selecionar o container dos produtos
     */
    const Shopping = function({selector: selector}) {
        this.selector = selector;
    }

    Shopping.prototype.addProduto = function () {
        let produto = document.querySelectorAll(this.selector);
        produto.forEach(element => {
            // console.log(element.lastElementChild.firstElementChild.children[0].getAttribute('data-name'));

            let btn = element.querySelector('[data-js="btn"]');
            let message = element.querySelector('[data-js="message"]');
            btn.addEventListener('click', function(event){
                message.textContent = 'Produto adiciona ao carrinho';
            });

            btn.addEventListener('mouseout', function(event){
                message.innerHTML = '';
                this.style.backgroundColor = '#fff';
                this.style.color = '#0000ff';
                this.style.border = 'transparent';
            });

            btn.addEventListener('mouseover', function(event){
                this.style.backgroundColor = '#0000ff';
                this.style.color = '#fff';
                this.style.border = 'transparent';
            });
        });
    }

    const sh = new Shopping({selector: '[data-js="card"]'});
    sh.addProduto();


})(PetShop, PetShop.Product)