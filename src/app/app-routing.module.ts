import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PropertyListingPage } from './property-list/property-list.page';
import { PropertyDetailsPage } from './property-details/property-details.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./property-list/property-list.module').then( m => m.PropertyListingModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'listing',
    loadChildren: () => import('./property-details/property-details.module').then( m => m.PropertyDetailsPageModule)
  },
   { path: '', redirectTo: 'property-list', pathMatch: 'full' },
  { path: 'property-list', component: PropertyListingPage },
  { path: 'property-details/:id', component: PropertyDetailsPage },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
