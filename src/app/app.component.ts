import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  opciones = {
    opcion1: "1",
    opcion2: "2",
    opcion3: "3",
    inicial: "0"
  };
  //bole: boolean = false;
  valorE=this.opciones.inicial;
  //valorngif = "valorE == opciones.opcion1";

  mostrar(n : string){
    //this.valorngif = "valorE == opciones.opcion"+n+"";
    this.valorE=n;
    //this.bole=true;
  };
}
