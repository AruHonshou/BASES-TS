"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel Jackson',
        ironman: 'Robert Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.4564356
    };
    const printAvenger = (_a) => {
        var { ironman } = _a, restoVengadores = __rest(_a, ["ironman"]);
        console.log(ironman, restoVengadores);
    };
    const avengersArr = ['Cap. America', 'Ironman', 'Hulk'];
    const [capitan, ironman,] = avengersArr;
})();
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    };
    const capitanAmerica = {
        name: 'Capitan America',
        weapon: 'Escudo'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Martillo'
    };
    const avengers = [ironman, thor, capitanAmerica];
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
(() => {
    'use strict';
    const nombre = 'Aru';
    const getName = () => {
        console.log('viejo getName');
    };
})();
//# sourceMappingURL=main.js.map