import { Component } from '@angular/core';
import { ConsultaService } from './servicios/consulta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examen';
  lista: any = [];

  constructor(private servicio: ConsultaService) { }

  ngOnInit() {
    this.servicio.getData().then((res) => {
      // console.log(res)
      this.lista = res;
    });
  }
}
