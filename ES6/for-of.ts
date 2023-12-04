(() => {

    type Avenger = {
        name: string,
        weapon: string;
    };

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    };

    const capitanAmerica: Avenger = {
        name: 'Capitan America',
        weapon: 'Escudo'
    };


    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Martillo'
    };

    const avengers: Avenger[] = [ironman, thor, capitanAmerica];

    for (const avenger of avengers) {
        console.log( avenger.name, avenger.weapon );
        
    }

})();