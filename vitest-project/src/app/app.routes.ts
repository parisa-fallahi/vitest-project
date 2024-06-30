import { Routes, provideRouter } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';
import { TermsAndServicesComponent } from '../terms-and-services/terms-and-services.component';

export const routes: Routes = [

    { path: 'terms', component: TermsAndServicesComponent,},
    { path: 'products', component: ProductListComponent,}
  ];
  
  export const appRoutingProviders = [provideRouter(routes)];