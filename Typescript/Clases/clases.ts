class Persona{
    private nombre:string;

    constructor(nombre:string){
        this.nombre= nombre;
    }
    getNombre():string{
        return this.nombre;
    }

    static metodoEstatico():number{
        return 1;
    }
}

let persona1= new Persona("Matias");
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());