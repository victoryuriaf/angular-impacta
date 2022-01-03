import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { HomeComponent } from './components/home/home.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { MasterOfPuppetsComponent } from './components/master-of-puppets/master-of-puppets.component';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    HomeComponent,
    TwoWayComponent,
    MasterOfPuppetsComponent,
    InputComponent,
    OutputComponent,
    NgIfComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
