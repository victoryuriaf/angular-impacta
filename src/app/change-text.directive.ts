import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(elementHTML : ElementRef) {
    console.log(elementHTML)
    elementHTML.nativeElement.innerText = 'This is the text that change the view by using component directive!'
  }
}
