(() => {
    // Esto en realidad no lo usa NI DIOS
    class Apocalipsis {

        static instance:Apocalipsis

        private constructor( public name: string){

        };

        static callApocalipsis(): Apocalipsis{
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis el unico!')
            }

            return Apocalipsis.instance;
        }


    };

    const apocalipsis = Apocalipsis.callApocalipsis();

    // const apocalipsis = new Apocalipsis('Soy un apocalipsis');


    // console.log( apocalipsis );

    
})();