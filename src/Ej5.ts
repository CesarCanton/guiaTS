abstract class Persona {
	nombre: string;
	apellido: string;
	edad: number;
	direccion: string;
	telefono: string;

	constructor(
		nombre: string,
		apellido: string,
		edad: number,
		direccion: string,
		telefono: string
	) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
		this.direccion = direccion;
		this.telefono = telefono;
	}
	mayorEdad() {
		return this.edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
	}
	mostrarDatosPersonales() {
		return `         Nombre: ${this.nombre} ${this.apellido},
         Edad: ${this.edad} (${this.mayorEdad()}),
         Dirección: ${this.direccion},
         Teléfono: ${this.telefono}`;
	}
}

export class Empleado extends Persona {
	salario: number;

	constructor(
		nombre: string,
		apellido: string,
		edad: number,
		direccion: string,
		telefono: string,
		
	) {
		super(nombre, apellido, edad, direccion, telefono);
		this.salario = 0;
	}

	mostrarDatosPersonales(): string {
        return `${super.mostrarDatosPersonales()}`;
    }
	cargarSueldo(sueldo: number): void {
		this.salario += sueldo;
	}
	imprimirSueldo(): string {
		return `El sueldo es de: $${this.salario}`;
	}
}
