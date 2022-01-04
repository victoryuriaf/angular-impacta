import { Component } from '@angular/core';
// importando os recursos necessarios
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-comp-service',
  templateUrl: './comp-service.component.html',
  styleUrls: ['./comp-service.component.css']
})
export class CompServiceComponent {
// casting das propriedades que serao usadas
  bagProducts!: Product[]

// chamando o constructor
  constructor(private objService : ProductService) {
  }

// criando uma funcao para - através do uso do objeto criado - acessar a lista de produtos
  accessListProducts() {
    this.bagProducts = this.objService.getProducts()
  }
}
