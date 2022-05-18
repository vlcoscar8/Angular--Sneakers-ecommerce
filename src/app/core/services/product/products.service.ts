import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  public getProducts(genre?: string, brand?: string): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `https://sneakersecommerceapi.vercel.app//products?genre=${genre}&brand=${brand}`
    );
  }
}
