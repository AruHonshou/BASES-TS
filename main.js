"use strict";
(() => {
    'use strict';
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo Salvado';
        }
        ;
    }
    ;
    class Villano extends Mutante {
        conquistarMundo() {
            return 'Mundo Conquistado!';
        }
        ;
    }
    ;
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villano('Magneto', 'Magnus');
    const printName = (character) => {
    };
    printName(wolverine);
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        ;
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        ;
        bio() {
            return `${this.name} (${this.team})`;
        }
        ;
    }
    Avenger.avgAge = 35;
})();
(() => {
    'use strict';
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        ;
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        ;
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor a 3 letras');
            }
            ;
            this.name = name;
        }
        getfullNameDesdeXMen() {
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.fullName = 'Aru';
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        ;
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis el unico!');
            }
            return Apocalipsis.instance;
        }
    }
    ;
    const apocalipsis = Apocalipsis.callApocalipsis();
    console.log(apocalipsis);
})();
//# sourceMappingURL=main.js.map