// Crear interfaces

interface Batimovil {
  encender: boolean,
  velocidadMaxima: number,
  acelear():string|void
}

interface Guason {
  reir?:boolean,
  comer?: boolean,
  llorar?: boolean
}

interface Ciudad {
  (ciudadanos: string[]):number;

}

interface Person {
  nombre:string
  edad:number
  sexo:string
  estadoCivil:string
  imprimirBio(): void // en consola una breve descripcion.
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:Batimovil ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil: Batimovil = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilizar el siguiente objeto
// utilizando propiedades opcionales

const guason:Guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

const ciudadGotica:Ciudad= ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}


// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Person{
  public nombre: 'Aru';
  public edad: 23;
  public sexo: 'Hombre';
  public estadoCivil: 'Soltero';
  imprimirBio(): void {
    console.log( 'Solo soy una persona que hace la tarea' );
    
  }
}

