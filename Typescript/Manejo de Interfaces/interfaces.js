"use strict";
let usuario1 = {
    nombreUsuario: "admin",
    password: "1234",
    confirmarPassword: "1234"
};
console.log(usuario1);
let avion = {
    abordarTransporte: () => {
        console.log("Abordando el avión");
    }
};
avion.abordarTransporte(); //interfaz=definicion de un contrato que debe cumplir un objeto
//# sourceMappingURL=interfaces.js.map