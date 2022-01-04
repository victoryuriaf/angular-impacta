import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// importando os componentes para os quais criaremos rotas
import { HomeComponent } from './components/home/home.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { MasterOfPuppetsComponent } from './components/master-of-puppets/master-of-puppets.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CustomDirComponent } from './components/custom-dir/custom-dir.component';
import { CompServiceComponent } from './components/comp-service/comp-service.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'interpolation', component:InterpolationComponent},
  {path: 'propbinding', component:PropertyBindingComponent},
  {path:'event', component:EventBindingComponent},
  {path: 'two-way', component: TwoWayComponent},
  {path: 'master', component: MasterOfPuppetsComponent},
  {path: 'ng-if', component: NgIfComponent},
  {path: 'ng-for', component: NgForComponent},
  {path: 'ng-class', component: NgClassComponent},
  {path: 'ng-style', component: NgStyleComponent},
  {path: 'custom-dir', component: CustomDirComponent},
  {path: 'comp-service', component: CompServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
