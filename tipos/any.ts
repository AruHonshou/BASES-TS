(() => {
    'use strict';
    let avenger: any = 123;
    let exist;
    let power;

    // avenger = 'Dr Strange';
    // console.log( avenger.charAt(3) );
    console.log( (avenger as string).charAt(3) );

    
    avenger = 150.23345345;
    console.log( avenger.toFixed(2) );
    

})();