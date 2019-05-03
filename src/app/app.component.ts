import { Component } from '@angular/core';

import {CursosService} from './cursos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ManejadorDeConsultas';

  constructor(private cursosService: CursosService){
    this.cursosService.getData();
  }

  cursos = []
}

