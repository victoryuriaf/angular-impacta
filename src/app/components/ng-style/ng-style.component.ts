import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {
// criando as propriedades para vincular via ngStyle
  colors: string = '#38OF6C'
  size: number = 12
// instancia da classe
  objStyle: StyleCss = new StyleCss()

}
// criando a classe para vincular a diretiva ngstyle
class StyleCss {
  'color': string = '#33C9FF'
  'font-size.%': number = 80
  'font-weight': string = 'bold'
}