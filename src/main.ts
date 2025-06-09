import { CabeceraPagina } from "./Ej1";
import { Calculadora } from "./Ej2";
import { Cancion } from "./Ej3";
import { Cuenta } from "./Ej4";
import { Empleado } from "./Ej5";
import "./style.css";

function tituloEjercicio(titulo: string) {
	console.log(`\n\nEjercicio: ${titulo}`);
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
   
</div>
   
`;
//ejercicio 1
tituloEjercicio("1. Cabecera de Página");
const ej1 = new CabeceraPagina();
ej1.obtenerDatos("Mi Página", "Azul", "Arial");
ej1.posicionarTitulo("Centrado");
console.log(ej1.mostrarDatos());

//ejercicio 2
tituloEjercicio("2. Calculadora");
const ej2 = new Calculadora();
ej2.sumar(5, 3);
console.log(`Resultado de la suma: ${ej2.getResultado()}`);
ej2.restar(10, 4);
console.log(`Resultado de la resta: ${ej2.getResultado()}`);
ej2.multiplicar(6, 7);
console.log(`Resultado de la multiplicación: ${ej2.getResultado()}`);
ej2.dividir(20, 5);
console.log(`Resultado de la división: ${ej2.getResultado()}`);
ej2.potencia(2, 3);
console.log(`Resultado de la potencia: ${ej2.getResultado()}`);
ej2.factorial(5);
console.log(`Resultado del factorial: ${ej2.getResultado()}`);

//ejercicio 3
tituloEjercicio("3. Clase Canción");
const ej3 = new Cancion("Despacito", "Reggaeton");
ej3.setAutor("Luis Fonsi");
console.log(ej3.mostrarInformacion());

//ejercicio 4
tituloEjercicio("4. Clase Cuenta");
const Ej4 = new Cuenta("Juan Pérez", "Ahorros", "123456789");
Ej4.depositar(10);
console.log(`Saldo actual: ${Ej4.cantidad} Dolares.`);
Ej4.retirar(5);
console.log(`Cuenta luego del retirar
Saldo actual: ${Ej4.cantidad} Dolares.`);
console.log(Ej4.mostrarDatos());

//ejercicio 5
tituloEjercicio("5. Clase Persona");
const Ej5 = new Empleado("Ana", "Gómez", 30, "Calle Falsa 123", "5555-1234");
Ej5.cargarSueldo(500);
console.log(`${Ej5.mostrarDatosPersonales()} 
         ${Ej5.imprimirSueldo()}
  `)
