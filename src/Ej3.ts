export class Cancion {
	titulo: string;
	genero: string;
	private autor: string;

	constructor(titulo: string, genero: string) {
		this.titulo = titulo;
		this.genero = genero;
		this.autor = "";
	}
	setAutor(autor: string): void {
		this.autor = autor;
	}
	getAutor(): string {
		return this.autor;
	}
	mostrarInformacion(): string {
		return `Título: ${this.titulo}, Género: ${this.genero}, Autor: ${this.autor}`;
	}
}
