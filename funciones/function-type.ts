(() => {
    'use strict';
    const addNumbers = ( a: number, b:number ): number => a + b;
    const greet = ( name:string ) => `Hola ${name}`;
    const saveTheWorld = (  ) => `El mundo esta salvado!`;

    // no es conveniente dejarlo en ANY, pero esto es un caso de ejemplo
    // podemos hacer que acepte cierto tipo
    // let myFunction;
    // let myFunction: Function;
    // let myFunction: (y: number, z:number) => number;//es una funcion que es tipo number, acepta solo el number
    // let myFunction: (y: string) => string;//solo acepta funcion que tenga string y regresa un string
    // let myFunction:() => string;// no ponemos nada y recibe un string

    let myFunction;

    myFunction = 10;
    console.log( myFunction );
    
    myFunction = addNumbers
    console.log( myFunction(1, 2) );

    myFunction = greet
    console.log( myFunction('Aru') );

    myFunction = saveTheWorld
    console.log( myFunction() );














})();