import { IProduto, produtos } from './produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;

  constructor() { }

  getAll() {
    return this.produtos;
  }

  get(produtoID: number) {
    return this.produtos.find(prod => prod.id == produtoID)
  }

  qtdToString(produto: IProduto) {
      if (produto != undefined) {
        return produto.quantidadeEstoque.toString();
      } else {
        return "";
      }
  }
}
