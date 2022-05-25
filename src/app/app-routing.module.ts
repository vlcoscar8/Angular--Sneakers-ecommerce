import { AuthGuard } from './core/guards/auth/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitGuard } from './core/guards/exit/exit.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('src/app/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'product-list',
    loadChildren: () =>
      import('src/app/pages/product-list/product-list.module').then(
        (m) => m.ProductListModule
      ),
  },
  {
    path: 'product/:id',
    loadChildren: () =>
      import('src/app/pages/product-detail/product-detail.module').then(
        (m) => m.ProductDetailModule
      ),
  },
  {
    path: 'user-account',
    loadChildren: () =>
      import('src/app/pages/user/user.module').then((m) => m.UserModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'buy-product',
    loadChildren: () =>
      import('src/app/pages/product-buy/product-buy.module').then(
        (m) => m.ProductBuyModule
      ),
    canActivate: [AuthGuard],
    canDeactivate: [ExitGuard],
  },
  {
    path: '**',
    redirectTo: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
