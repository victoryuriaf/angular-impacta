import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// importando os componentes para os quais criaremos rotas
import { HomeComponent } from './components/home/home.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'interpolation', component:InterpolationComponent},
  {path: 'propbinding', component:PropertyBindingComponent},
  {path:'event', component:EventBindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
