// este será nosso model domain
export class Product {
// criando o construtor da classe e referenciando/inicializando cada uma das propriedades que serão disponbilizadas para uso
    constructor(idProduct : number, nameProduct: string, priceProduct: number) {
        this.idProduct = idProduct
        this.nameProduct = nameProduct
        this.priceProduct = priceProduct
    }

// "disponibilizando" as propriedades
    idProduct: number
    nameProduct: string
    priceProduct: number
}