(() => {
    'use strict';
    //...restArgs, el resto de argumentos, estan en un areglo
    const fullName = ( firstName: string, ...restArgs:string[]  ): string => {
        return `${ firstName } ${restArgs.join(' ')} `;
    };
    

    const superman = fullName ('Clarck', 'Joseph', 'Kent');

    console.log( {superman} );
    












})();