"use strict";
(() => {
    'use strict';
    //Si ponemos el ? es porque es OPCIONAL, no obligatorio
    //decimos que el upper es un booleano falso por defecto, ya que anterior de el, hay uno OPCIONAL
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName}, ${lastName || 'no lastname'}`.toUpperCase();
        }
        else {
            return `${firstName}, ${lastName || 'no lastname'}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
