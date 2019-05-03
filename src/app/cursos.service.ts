import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
/**
 * Clase encargada de "traer" datos de la BD
 */
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private httpClient:HttpClient) { 
    console.log('serice is working');
  }

  getData(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
