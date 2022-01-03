import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
// criando a primeira propriedade para vincular com ngClass
  cssChangedByVar: string = 'color size'
  objCss: PropsCss = new PropsCss()
}

// criando um classe com propriedades CSS
class PropsCss {
  color: boolean = true
  size: boolean = true
}
