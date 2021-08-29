import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http : HttpClient) { }

  getData() : Promise<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();
  }
}
