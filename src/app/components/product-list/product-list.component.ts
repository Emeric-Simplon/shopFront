import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import * as data from '../../data/data.json';
import * as categories from '../../data/categories.json';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public productList;
  public categories;
  public cart=  [];
  public total: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.productList = data.data;
    this.categories = categories.categories;
  }
  filterProduct(catType){
    this.productList = data.data;
    this.productList = this.productList.filter(product => product.category === catType);
    return this.productList;
  }

  addItem(product){
    if(this.cart.includes(product)){
      let existingProduct = this.cart.find(prod => prod === product);
      existingProduct.quantity += 1;
    }else{
      product.quantity = 1;
      this.cart.push(product) 
    }
    this.refreshTotal()
  }

  reset(){
    this.productList = data.data;
  }

  refreshTotal(){
    let result = 0;
    this.cart.map(item => {
      let itemTotal = item.quantity * item.price;
    return  result += itemTotal;
    })
    this.total = result;
  }

  decrementQty(cartProduct){
    cartProduct.quantity -= 1;
    if(cartProduct.quantity <= 0){
     this.cart = this.cart.filter(prod => prod != cartProduct);
    }
    this.refreshTotal();
  }

  incrementQty(cartProduct){
    cartProduct.quantity += 1;
    this.refreshTotal();
  }

  isLoged(){
    if(localStorage.getItem('isLogged')){
      this.router.navigate(["/order"])
    }else{
      this.router.navigate(["/auth"])
    }
  }

}
