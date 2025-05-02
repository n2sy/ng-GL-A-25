import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionProduitsService {
    allProducts = signal<any[]>([]);

  constructor() {
    this.allProducts.set([
        {
            id : 1,
            name : "Product 1",
            price : 300,
            isSelected :true
        },
        {
            id : 2,
            name : "Product 2",
            price : 240,
            isSelected :false
        },
        {
            id : 3,
            name : "Product 3",
            price : 32,
            isSelected :false
        },
    ]);
    effect(() => {
        console.log("Nouvelle liste de produits ", this.allProducts());
    })
  }
  
  updateSelectedValue(productId) {
    this.allProducts.update(previous => {
        let i = previous.findIndex(p => p.id == productId);
        previous[i].isSelected = !previous[i].isSelected;
        return [...previous]
    })
  }
  
  deleteProduct(productId) {
    this.allProducts.update(previous => {
        return previous.filter(p => p.id != productId)
    })
  }
  addProduct(newProduct) {
    this.allProducts.update(previous => {
        newProduct.id = previous[previous.length - 1].id + 1;
        return [...previous, newProduct];
    })
  }
}
