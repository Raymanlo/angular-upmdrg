import { Component, Input } from '@angular/core';

@Component({
  selector: 'miboton1',
  template:
    '<style>button {color: black;padding: 20px; margin-left: 20%;background-color:orange;'+
    '}</style>'
    +'<button>{{texto}}</button>',
  styleUrls: ['./app.component.css'],
})
export class Boton1Component {
  texto='Pelicula1';
}