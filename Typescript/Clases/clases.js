"use strict";
class Persona {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    static metodoEstatico() {
        return 1;
    }
}
let persona1 = new Persona("Matias");
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());
//# sourceMappingURL=clases.js.map