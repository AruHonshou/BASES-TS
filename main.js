"use strict";
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    'use strict';
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
(() => {
    'use strict';
    const fullName = (firstName, lastName) => {
        return `${firstName}, ${lastName || 'no lastname'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
(() => {
    'use strict';
    const fullName = (firstName, lastName) => `${firstName}, ${lastName}`;
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    'use strict';
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')} `;
    };
    const superman = fullName('Clarck', 'Joseph', 'Kent');
    console.log({ superman });
})();
(() => {
    'use strict';
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado!`;
    let myFunction;
    myFunction = 10;
    console.log(myFunction);
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Aru'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    'use strict';
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Batisignal activa!';
    };
    const heroName = returnName();
})();
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
        powers: ['super velocidad', 'super fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
})();
(() => {
    'use strict';
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        },
    };
    console.log(flash);
})();
(() => {
    'use strict';
    let myCustomVariable = 'Aru';
    console.log(myCustomVariable);
    myCustomVariable = 20;
    console.log(myCustomVariable);
    myCustomVariable = {
        name: 'Aru',
        age: 23,
        powers: [1]
    };
    console.log(myCustomVariable);
})();
(() => {
    'use strict';
    let avenger = 123;
    let exist;
    let power;
    console.log(avenger.charAt(3));
    avenger = 150.23345345;
    console.log(avenger.toFixed(2));
})();
(() => {
    'use strict';
    const numbers = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
    ];
    const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villians.forEach(v => console.log(v.toUpperCase()));
})();
(() => {
    'use strict';
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
})();
(() => {
    'use strict';
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    ;
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    'use strict';
    const abc = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    abc('Auxilio');
})();
(() => {
    'use strict';
})();
(() => {
    'use strict';
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
})();
(() => {
    'use strict';
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Heroe: Volcan Negro`;
    const abc = 123;
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta');
})();
(() => {
    'use strict';
    const hero = ['Dr Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
})();
(() => {
    'use strict';
    function callBatman() {
        return;
    }
    ;
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map