(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avengers = {
        nick: 'Samuel Jackson',
        ironman: 'Robert Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.4564356
    };

    // const { poder, vision} = avengers

    // console.log( poder.toFixed(2), vision.toUpperCase() );
    const printAvenger = ({ ironman, ...restoVengadores }: Avengers) => {
        console.log( ironman, restoVengadores );
        
    }


    const avengersArr:string[] = ['Cap. America', 'Ironman', 'Hulk']
    const [ capitan , ironman, ] = avengersArr;
    // console.log( {ironman, capitan} );
    
})();