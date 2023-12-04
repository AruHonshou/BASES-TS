(() => {
    'use strict';
    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string
    };

    let myCustomVariable: (string | number | Hero) = 'Aru';
    console.log( myCustomVariable );
    
    myCustomVariable = 20;
    console.log( myCustomVariable );

    myCustomVariable = {
        name: 'Aru',
        age: 23,
        powers: [1]
    };
    console.log( myCustomVariable );
















})();