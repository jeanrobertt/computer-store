import { IProdutoCarrinho } from './produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  getLista() {
    let list = localStorage.getItem("carrinho")
    if (list != null) {
      this.itens = JSON.parse(list)
      return this.itens
    } else {
      return [];
    }
  }

  adicionarItem(produto: IProdutoCarrinho) {
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens))
  }
  
  removerItem(produtoID: number) {
    this.itens = this.itens.filter(item => item.id != produtoID)
    localStorage.setItem("carrinho", JSON.stringify(this.itens))
  }

  limpar() {
    this.itens = [];
    localStorage.clear()
  }


}
