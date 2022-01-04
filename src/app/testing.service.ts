import { Injectable } from '@angular/core';

@Injectable()
export class TestingService {
  // função para verificar se ProductService está sendo executado corretamente
  unitary(messageTeste:any){
    console.log(messageTeste)
  }   
}