import { IProdutoCarrinho, IProduto } from './../produtos';
import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(public carrinhoService: CarrinhoService, public produtoService: ProdutosService, private router: Router) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.getLista();
    this.calcularTotal()
  }

  calcularTotal() {
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  removerItem(produtoID: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id != produtoID);
    this.carrinhoService.removerItem(produtoID)
    this.calcularTotal()
  }

  comprar(){ 
    alert("Compra finalizada com sucesso!")
    this.carrinhoService.limpar();
    this.router.navigate(["produtos"])
  }

  max(produto: IProduto) {
    if (produto != undefined) {
      return this.produtoService.qtdToString(produto)
    }
    return null
  }

}
