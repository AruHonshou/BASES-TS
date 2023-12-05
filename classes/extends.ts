(() => {
    'use strict';
    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            // console.log( 'Constructor Avenger llamado!' );
            
        }

        protected getFullname(){
            return `${this.name} ${this.realName}`;


        }
    }

    class Xmen extends Avenger{

        constructor(
            // protected name: string,
            name: string,
            realName: string,
            public isMutant: boolean
        ){
            super(name, realName);
            // console.log( 'Constructor Xmen LLamado!' );
            
        };

        get fullName(){
            return `${this.name} - ${this.realName}`;
        };

        set fullName(name: string){
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor a 3 letras')
            };


            this.name = name;
        }

        getfullNameDesdeXMen() {
            // console.log( super.getFullname() );
            
        }
        
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    // console.log( wolverine );
    wolverine.fullName = 'Aru';
















})();