import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Items } from '../../item.service';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './item-list.html',
  styleUrls: ['./item-list.css'],
})
export class ItemList implements OnInit {
  products: any[] = [];   // <-- MUST BE ARRAY

  constructor(private items: Items, private router: Router) {}

  ngOnInit() {
    this.items.getItems().subscribe({
      next: (data: any[]) => {
        console.log('Products from server:', data);
        this.products = data;       // <-- FIXED (was data[0])
      },
      error: err => {
        console.error('Error loading products:', err);
      }
    });
  }

  order(product: any) {
    this.items.selectProduct(product).subscribe(() => {
      this.router.navigate(['/review']);
    });
  }
}
