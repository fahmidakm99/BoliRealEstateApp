import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PropertyListingPage } from './property-list.page';

import { PropertyListingPageRoutingModule } from './property-list-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertyListingPageRoutingModule
  ],
  declarations: [PropertyListingPage]
})
export class PropertyListingModule {}
