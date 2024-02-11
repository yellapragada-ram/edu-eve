import { Component } from '@angular/core';
import { ProductService } from '../product-service';
import { Router } from '@angular/router';
interface Car {
  brand: string;
  year: number;
  color: string;
  imageUrl: string; // Add this property
}



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent{
  date: Date[] | undefined;
  cars: Car[] | undefined ;
  products!: any[];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
      this.productService.getProducts().then((data) => (this.products = data));
  }

  getSeverity(product: any): string | undefined {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return undefined; // Return undefined for unknown status
    }
}
navToHostEvent(){
  this.router.navigate(['/host-event']);
}
navToDashboard(){
  this.router.navigate(['/']);
}
}
