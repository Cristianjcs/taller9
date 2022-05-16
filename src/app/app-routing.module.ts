import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './componente/calculadora/calculadora.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { FormularioDComponent } from './componente/formulario-d/formulario-d.component';
import { VariosComponent } from './componente/varios/varios.component';

const routes: Routes = [
  {path:'calculadora',component:CalculadoraComponent},
  {path:'Inicio', component:InicioComponent},
  {path:'Formulario',component:FormularioDComponent},
  {path:'Varios', component:VariosComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
