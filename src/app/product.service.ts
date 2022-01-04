import { Product } from "./product";
import { TestingService } from "./testing.service";
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  constructor(private resultTest : TestingService) { 
    this.resultTest.unitary('Constructor builded succesfully!')
  }

// criar uma funcao para retornar uma lista de produtos
  public getProducts() {
    this.resultTest.unitary('Method / Function getProducts() called super top!')

// propriedade que será a lista de produtos
    let listProducts: Product[]

// criando os itens da lista de produtos
    listProducts = [
      new Product (1, 'Quadro baby Yoda', 199),
      new Product (2, 'Mascara Darth Vader', 159),
      new Product (3, 'Lightsaber', 89)
    ]
  this.resultTest.unitary(listProducts)

// retorno da lista criada
    return listProducts
  }
}
