export class Pelicula {
    id:string = '';
    nombre:string = '';
    tipo:string = '';
    fechaDeEstreno:Date = new Date();
    cantidadDePublico:string = '';
    fotoDePelicula:string = '';
    isActive:boolean = false;
    reparto:string[] = [];

    constructor(){
    }

}
