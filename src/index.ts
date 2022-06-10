console.clear();

//los traigo de html
let usuario = document.getElementById("x");
let password = document.getElementById("password");
let butt = document.getElementById("button");

let cantidadUser: number = 50;
let Usuarios: string[] = new Array(cantidadUser);
let Contrasenas: number[] = new Array(cantidadUser);

Usuarios[30] = "Nicolas";
Contrasenas[30] = 1234;

let verific: boolean = false;

function encuentrame(user2: string, pass2: number) {
  for (let index = 0; index < Usuarios.length; index++) {
    if (user2 === Usuarios[index] && pass2 === Contrasenas[index]) {
      console.log("bienvenido");
      verific = true;
    }
    if (user2 === Usuarios[index] && !(pass2 === Contrasenas[index])) {
      console.log("entro");
      verific = true;
    }
    if (!(user2 === Usuarios[index]) && !(pass2 === Contrasenas[index])) {
      console.log("ninguna de las dos");
      verific = false;
    }
  }
}

butt.addEventListener("click", () => {
  let UserIngresado: string = String(usuario.value);
  let passIngresado: number = Number(password.value);
  encuentrame(UserIngresado, passIngresado);
  console.log(verific);
});
