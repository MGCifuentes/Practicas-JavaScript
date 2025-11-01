interface Usuario {
    nombreUsuario: string;
    password: string;
    confirmarPassword?: string; // Propiedad opcional
}

let usuario1: Usuario = {
    nombreUsuario: "admin",
    password: "1234",
    confirmarPassword: "1234"
};

console.log(usuario1);

interface Abordador {
    abordarTransporte(): void;
}

let avion: Abordador = {
    abordarTransporte: () => {
        console.log("Abordando el avión");
    }
};

avion.abordarTransporte(); //interfaz=definicion de un contrato que debe cumplir un objeto