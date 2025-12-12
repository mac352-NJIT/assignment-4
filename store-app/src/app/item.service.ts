import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class Items {
  constructor(private http: HttpClient) {}

  getItems(): Observable<any> {
    return this.http.get('api/product');
  }

  selectProduct(product : any): Observable<any> {
    return this.http.post('api/select-product', product);
  }

  getselectedProduct(): Observable<any> {
    return this.http.get('api/selected-product');
  }

  submitReview(review: any): Observable<{ message : string }> {
    return this.http.post<{ message : string }>('api/submit-review', review);
  }
}

