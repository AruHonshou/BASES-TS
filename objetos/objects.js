"use strict";
(() => {
    'use strict';
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['supervelocidad', 'viaja en el tiempo'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['supervelocidad', 'viaja en el tiempo', 'superfuerza'],
    };
    flash = {
        name: 'Otro nombre',
        // age: 60,
        powers: ['super velocidad', 'super fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
})();
