import { Component, Input } from '@angular/core';

@Component({
  selector: 'micontenido1',
  template:
    '<style>.sinop{font-size:16px;}  img{height:480px; width:640px;}</style>' +
    '<h1>{{cont1}}<h1>' +
    '<img src="https://www.tvinsider.com/wp-content/uploads/2021/03/BACK_TO_THE_FUTURE_2.jpg">' +
    '<div class="sinop">{{sinopsis1}}</div>',
  styleUrls: ['./app.component.css'],
})
export class Contenido1Component {
  //@Input() cont1: String;
  //@Input() bole: Boolean;
  cont1 = 'Volver al futuro';
  sinopsis1 =
    'El adolescente Marty McFly es amigo de Doc, un científico al que todos toman por loco.' +
    ' Cuando Doc crea una máquina para viajar en el tiempo, un error fortuito hace que Marty llegue a 1955,' +
    ' año en el que sus futuros padres aún no se habían conocido. Después de impedir su primer encuentro,' +
    ' debe conseguir que se conozcan y se casen. De lo contrario, su existencia no sería posible.';
}