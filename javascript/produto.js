(function(PetShop) {
    'use strict'

    const Product = function({name: name, desc: desc, value: value}) {
        this.name = name;
        this.desc = desc;
        this.value = value;
    }

    Product.prototype.getProduct = function () {
        return `${this.name} ${this.desc} ${this.value}`;
    }

    PetShop.Product = Product;

})(PetShop)