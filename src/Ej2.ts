export class Calculadora {
    private resultado: number;

    constructor() {
        this.resultado = 0;
    }

    sumar(a: number, b: number): number {
        this.resultado = a + b;
        return this.resultado;
    }

    restar(a: number, b: number): number {
        this.resultado = a - b;
        return this.resultado;
    }

    multiplicar(a: number, b: number): number {
        this.resultado = a * b;
        return this.resultado;
    }

    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        this.resultado = a / b;
        return this.resultado;
    }
    potencia(base: number, exponente: number): number {
        this.resultado = Math.pow(base, exponente);
        return this.resultado;
    }
    factorial(n: number): number {
        if (n < 0) {
            throw new Error("El factorial no está definido para números negativos");
        }
        if (n === 0 || n === 1) {
            this.resultado = 1;
            return this.resultado;
        }
        this.resultado = 1;
        for (let i = 2; i <= n; i++) {
            this.resultado *= i;
        }
        return this.resultado;
    }

    getResultado(): number {
        return this.resultado;
    }
}