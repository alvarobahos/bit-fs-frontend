import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  { path: 'inicio', title: 'SPA | Inicio', component: HomeComponent },
  { path: 'productos', title: 'SPA | Productos', component: ProductsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  {
    path: '**',
    title: 'Pagina No Encontrada',
    component: PagenotfoundComponent,
  },
];
