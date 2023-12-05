"use strict";
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
    class Mutant {
        constructor() {
            this.age = 23;
            this.name = 'Kendall';
            this.realName = 'Kendal';
        }
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Aru',
        age: 23,
        address: {
            id: 123,
            zip: 'KYS',
            city: 'Ottawa',
        }
    };
    const client2 = {
        name: 'Nako',
        age: 23,
        address: {
            id: 123,
            zip: 'KYS',
            city: 'Ottawa',
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map