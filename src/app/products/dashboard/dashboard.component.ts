import { Component, computed, inject } from '@angular/core';
import { GestionProduitsService } from '../../services/gestion-produits.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    productsService = inject(GestionProduitsService);
    nbSelectedProducts = computed(() => {
       return this.productsService.allProducts().filter(p => p.isSelected).length
    })
    totalPrice = computed(() => {
        let t = this.productsService.allProducts().filter(p => p.isSelected)

        return t.reduce((resultat, produit) => resultat + produit.price,  0)
    })

}
