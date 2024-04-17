(function(win){
    'use strict'

    const PetShop = {};

    PetShop.isNumber = function (value) {
        let type = Object.prototype.toString.call(value);
        return type === '[object Number]';
    }

    PetShop.isArray = function (value) {
        let type = Object.prototype.toString.call(value);
        return type === '[object Array]';
    }

    win.PetShop = PetShop;

})(window);