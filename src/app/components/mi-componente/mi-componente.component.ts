import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    template: `
    <h1>Hola mundo, soy MI COMPONENTE<h1>
    <p>Este es mi primer componente<p>
    `
})

export class MiComponente{
    public titulo: string;
    public comentario: string;
    public year: number;
    
    
    constructor(){

        this.titulo = "Hola mundo";
        this.comentario = " mi primer comentario";
        this.year = 2020;

        console.log("Mi Componente cargado!");
        console.log(this.titulo, this.comentario, this.year);
    }
}