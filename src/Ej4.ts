import Swal from "sweetalert2";

export class Cuenta {
	nombre: string;
	cantidad: number;
	tipoCuenta: string;
	numeroCuenta: string;
	constructor(
		nombre: string,
		tipoCuenta: string,
		numeroCuenta: string
	) {
		this.nombre = nombre;
		this.cantidad = 0;
		this.tipoCuenta = tipoCuenta;
		this.numeroCuenta = numeroCuenta;
	}

	depositar(cantidad: number): void {
		if (cantidad < 5) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "La cantidad mínima a depositar es de 5 unidades.",
            });
		}
        else {
            this.cantidad += cantidad;
            Swal.fire({
                icon: "success",
                title: "Depósito realizado",
                text: `Se han depositado ${cantidad} Dolares.
                Nuevo saldo: ${this.cantidad} Dolares.`,
            });
        }
	}

retirar(cantidad: number): void {
        if (cantidad > this.cantidad) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Fondos insuficientes para retirar esa cantidad.",
            });
        } else if (cantidad < 5) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "La cantidad mínima a retirar es de 5 unidades.",
            });
        } else {
            this.cantidad -= cantidad;
            Swal.fire({
                icon: "success",
                title: "Retiro realizado",
                text: `Se han retirado ${cantidad} Dolares.
                Nuevo saldo: ${this.cantidad} Dolares.`,
            });
        }
    }
    mostrarDatos(): string {
        return `Cuenta de ${this.nombre} (${this.tipoCuenta}):
                Número de cuenta: ${this.numeroCuenta}
                Saldo actual: ${this.cantidad} Dolares.`;
    }
}
