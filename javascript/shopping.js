(function(Pet, Product, $){
    'use strict'

    /**
     * Objeto para criar um carrinho de compra
     * @param {string} selector selecionar o container dos produtos
     */
    const Shopping = function({selector: selector}) {
        this.selector = selector;
        this.list = [];
    }

    Shopping.prototype.addProduto = function () {
        let produto = document.querySelectorAll(this.selector);
        produto.forEach(element => {
            const list = this.list;
            const funcCarrinho = this.addCarrinhoTotal;
            let btn = element.querySelector('[data-js="btn"]');
            let message = element.querySelector('[data-js="message"]');
            btn.addEventListener('click', function(event){
                message.textContent = 'Produto adiciona ao carrinho';
                const name = this.parentElement.querySelector('div h3').getAttribute('data-name')
                const desc = this.parentElement.querySelector('div p').getAttribute('data-desc')
                const value = this.parentElement.querySelector('.value').getAttribute('data-value')

                let produto = new Product(
                    {
                        name: name, 
                        desc: desc, 
                        value: value
                    }
                );
                list.push(produto);
                funcCarrinho(list.length);

                console.log(list);
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

    Shopping.prototype.init = function() {
        this.addProduto();
    }

    Shopping.prototype.addCarrinhoTotal = function(quantidade) {
        let carrinho = document.querySelector('[data-js="qtd-car"]');
        carrinho.innerHTML = quantidade;
    }

    const sh = new Shopping({selector: '[data-js="card"]'});
    sh.init();


})(PetShop, PetShop.Product, jQuery)