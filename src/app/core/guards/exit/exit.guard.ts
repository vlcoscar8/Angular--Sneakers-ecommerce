import { ProductCartService } from './../../services/product-cart/productcart.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExitGuard implements CanDeactivate<unknown> {
  constructor(
    private productCartService: ProductCartService,
    private router: Router
  ) {}
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.productCartService.existProducts) {
      return window.confirm(
        'Todavia tienes productos en el carrito, no quieres finalizar el pedido todavia?'
      );
    }

    return this.router.createUrlTree(['']);
  }
}
