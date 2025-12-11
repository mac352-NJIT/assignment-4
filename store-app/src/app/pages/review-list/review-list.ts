import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Items } from '../../item.service';

@Component({
  selector: 'app-review-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-list.html',
  styleUrls: ['./review-list.css'],
})
export class ReviewList implements OnInit {
product: any = null;
message = '';

constructor(private items: Items) {}

ngOnInit() {
  this.items.getselectedProduct().subscribe(data => this.product = data);
}

submitReview() {
  this.items.submitReview(this.product).subscribe(res => this.message = res.message);
}
}