import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent {
  // criar a propriedade que será vinculada na view - via two-way binding
  public name: string = ''
}
