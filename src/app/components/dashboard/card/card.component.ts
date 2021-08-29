import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() user: any;
  name: string;
  email: string;
  genero: string;
  id: number;

  constructor(
    private router: Router
  ) {
    this.name = "";
    this.email = "";
    this.genero = "";
    this.id = 0;
  }

  ngOnInit(): void {
    this.name = this.user.name;
    this.email = this.user.email;
    this.genero = this.user.gender;
    this.id = this.user.id;
  }

  verDetalles(): void {
    // alert('Usted va a ver los detalles');
    this.router.navigate(['dashboard/usuario'], {queryParams: {id: this.id}})
  }

}
