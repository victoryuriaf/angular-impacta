// este é o componente-pai
import { Component } from '@angular/core';

@Component({
  selector: 'app-master-of-puppets',
  templateUrl: './master-of-puppets.component.html',
  styleUrls: ['./master-of-puppets.component.css']
})
export class MasterOfPuppetsComponent {
// criar uma funcao para receber e "tratar" os dados enviados pelo componente-filho
 public receivingData(receivedData:any): void {

// variável que "acessará" os dados
  let receiver: string = 'Thank you for registering ' + receivedData.name + '. ';
  receiver = receiver + 'The email ' + receivedData.email + ' was registered succesfully!'

// chamar a janela de alerta
  alert(receiver)

 }
}

/**
  // criar duas propriedades para enviar os dados para o componente-filho (input component)
  public text: string = 'Text that will be displayed on component!'
  public anotherText: string = 'Text that will be displayed on alert window!'
 */
