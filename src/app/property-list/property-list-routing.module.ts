import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListingPage } from './property-list.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyListingPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyListingPageRoutingModule {}
