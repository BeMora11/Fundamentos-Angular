import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  texto: string;

  constructor(
    private usuarioService: UsuarioService
  ) {
    this.texto = "";
  }

  ngOnInit(): void {
  }

}
