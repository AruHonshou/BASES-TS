(() => {
    'use strict';

    class Avenger {
        // esto no es necesario en javascript
        name;
        power;

        constructor( name, power ) {
            this.name = name;
            this.power = power;
        }

    };

    class FlyingAvenger extends Avenger{
        // no es necesario de poner
        flying;

        constructor(name, power){
            super(name, power)
            this.flying = true
        }
    }

    const hulk = new Avenger('Hulk', 9001);

    const falcon = new FlyingAvenger('Falcon', 500, true);

    console.log( hulk );
    console.log( falcon );
    





    
})();