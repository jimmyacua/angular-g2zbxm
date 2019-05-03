import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {RouterModule, Route} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CursosService} from './cursos.service';
import { StudentComponent } from './student/student.component'

const routes: Route[] = [ //lista de rutas. Agregar rutas aquí.
  {path: 'student', component: StudentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
