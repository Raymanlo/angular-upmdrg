import { Component } from '@angular/core';

@Component({
  selector: 'micontenido3',
  template:
    '<style>.sinop{font-size:16px;}  img{height:480px; width:640px;}</style>' +
    '<h1>{{cont3}}<h1>' +
    '<img src="https://clarovideocdn1.clarovideo.net/PELICULAS/LOOPER/EXPORTACION_WEB/SS/LOOPERWHORIZONTAL.jpg?size=675x380">' +
    '<div class="sinop">{{sinopsis3}}</div>',
  styleUrls: ['./app.component.css'],
})
export class Contenido3Component {
  cont3 = 'Looper: Asesinos del futuro';
  sinopsis3 =
    'En el año 2044, Estados Unidos sufrió un severo colapso económico, causando un aumento de' +
    ' las problemáticas sociales y el crecimiento del crimen organizado. Además, una extraña mutación afecta' +
    ' al 10 % de la población, otorgándoles poderes telequinéticos limitados. El viaje a través del tiempo es' +
    ' inventado en el año 2074, aunque queda terminantemente prohibido su uso, sin embargo el mismo es' +
    ' utilizado por las organizaciones criminales, para enviar a aquellos que quieren muertos en el futuro,' +
    " directamente al pasado donde son asesinados por los 'Loopers' (Orbitadores), asesinos pagados con" +
    ' lingotes de plata atados a sus objetivos.';
}