import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  /**
   *
   * @param genre The query param to filter by genre
   * @param brand The query param to filter by brand name
   * @returns the method asyncronous with the endpoint to get the list of products
   */
  public getProducts(genre?: string, brand?: string): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `${environment.apiUrl}products?genre=${genre}&brand=${brand}`
    );
  }

  /**
   *
   * @param productId The product Id in the param when the user click on a product
   * @returns the method asyncronous with the endpoint to get an especific product by id
   */
  public getProductById(productId?: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(
      `${environment.apiUrl}product/${productId}`
    );
  }

  public getShopHome(): Observable<any> {
    return this.httpClient.get<IProduct>(`${environment.apiUrl}home`);
  }

  public buyProduct(userId: string, body: any): Observable<any> {
    return this.httpClient.post<IProduct>(
      `${environment.apiUrl}user/buy/${userId}`,
      body
    );
  }
}
