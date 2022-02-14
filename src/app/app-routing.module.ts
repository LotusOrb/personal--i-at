import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPageComponent } from './app/app-page/app-page.component';

const routes: Routes = [
  {
    path: '',
    component: AppPageComponent
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
