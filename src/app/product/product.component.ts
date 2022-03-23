import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = "Ürün Listesi";
  filterText = "";
  products : Product[] = [
    {id:1, name: "Laptop", price: 2500, categoryId:1, description : "Asus Zenbok added 2 packages, removed 1 package, and audited 907 packages in 13s", imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"},
    {id:2, name: "Computer", price: 3500, categoryId:1, description : "Asus Zenbok added 2 packages, removed 1 package, and audited 907 packages in 13s ", imageUrl: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {id:3, name: "Mause", price: 4500, categoryId:2, description : "Asus Zenbok added 2 packages, removed 1 package, and audited 907 packages in 13s", imageUrl: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {id:4, name: "xxx", price: 5500, categoryId:2, description : "Asus Zenbok added 2 packages, removed 1 package, and audited 907 packages in 13s", imageUrl: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},


  ] 

  ngOnInit(): void {
  }

}
