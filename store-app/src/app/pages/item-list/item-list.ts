import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Items } from '../../item.service';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-list.html',
  styleUrls: ['./item-list.css'],
})
export class ItemList implements OnInit {
  products: any[] = [];
  constructor(private items: Items, private router: Router) {}
  ngOnInit() {
    this.items.getItems().subscribe((data: any) => this.products = data);
  }

  order(product: any) {
    this.items.selectProduct(product).subscribe(() => {
      this.router.navigate(['/review']);
    });
  }
}