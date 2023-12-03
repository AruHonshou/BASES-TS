(() => {
    'use strict';
    //Si ponemos el ? es porque es OPCIONAL, no obligatorio
    const fullName = ( firstName:string, lastName?:string ):string => {
        return `${firstName}, ${lastName || 'no lastname'}`;
    };
    
    const name = fullName( 'Tony' );

    console.log( {name} );
    















})();