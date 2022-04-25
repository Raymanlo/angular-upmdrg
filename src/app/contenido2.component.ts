import { Component } from '@angular/core';

@Component({
  selector: 'micontenido2',
  template:
    '<style>.sinop{font-size:16px;}  img{height:480px; width:640px;}</style>' +
    '<h1>{{cont2}}<h1>' +
    '<img src="https://www.lascosasquenoshacenfelices.com/wp-content/uploads/2016/09/2.jpg">' +
    '<div class="sinop">{{sinopsis2}}</div>',
  styleUrls: ['./app.component.css'],
})
export class Contenido2Component {
  cont2 = 'The Terminator';
  sinopsis2 =
    ' En un futuro en el que la Humanidad está esclavizada por las máquinas, John Connor, nacido' +
    ' en los años 80, lidera la resistencia. Para vencer a los rebeldes, las máquinas envían al androide' +
    ' Terminator al pasado para asesinar a la madre de John Connor e impedir así su nacimiento.';
}