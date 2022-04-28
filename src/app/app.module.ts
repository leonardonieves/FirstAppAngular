import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FormsModule } from '@angular/forms';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProjectsComponentComponent } from './projects-component/projects-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[

  {path:'', component:HomeComponentComponent},
  {path:'projects', component:ProjectsComponentComponent},
  {path:'contact', component:ContactComponentComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponentComponent,
    ProjectsComponentComponent,
    ContactComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EmpleadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
