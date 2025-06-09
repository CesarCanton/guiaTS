type titulos = "Centrado" | "Derecha" | "Izquierda";
export class CabeceraPagina {
	titulo: string;
	color: string;
	fuente: string;
	posTitulo: titulos;

	constructor() {
		this.titulo = "";
		this.color = "";
		this.fuente = "";
		this.posTitulo = "Izquierda"; // Valor por defecto
	}

	setTitulo(titulo: string): void {
		this.titulo = titulo;
	}
	setColor(color: string): void {
		this.color = color;
	}
	setFuente(fuente: string): void {
		this.fuente = fuente;
	}
	setPosTitulo(posTitulo: titulos): void {
		this.posTitulo = posTitulo;
	}
	getTitulo(): string {
		return this.titulo;
	}
	getPosTitulo(): titulos {
		return this.posTitulo;
	}
	getColor(): string {
		return this.color;
	}
	getFuente(): string {
		return this.fuente;
	}
	obtenerDatos(titulo: string, color: string, fuente: string) {
		this.setTitulo(titulo);
		this.setColor(color);
		this.setFuente(fuente);
	}

	posicionarTitulo(posTitulo: titulos) {
		this.setPosTitulo(posTitulo);
	}
	mostrarDatos(): string {
		return `Titulo: ${this.getTitulo()}, Color: ${this.getColor()}, Fuente: ${this.getFuente()}
Posición del Título: ${this.getPosTitulo()}`;
	}
}
