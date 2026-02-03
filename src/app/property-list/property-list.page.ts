import { Component, OnInit } from '@angular/core';
import {
  IonicModule,
  NavController,
  ToastController,
  LoadingController,
} from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PropertyService } from '../services/properties';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.page.html',
  styleUrls: ['./property-list.page.scss'],
  standalone: false,
})
export class PropertyListingPage implements OnInit {
  properties: any[] = [];
  loading = false;
  response: any;

  constructor(
    private propertyService: PropertyService,
    private navCtrl: NavController,
    private route: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
  ) {}

  async ngOnInit() {
    const loader = await this.loadingCtrl.create({
      message: 'Loading properties...',
    });
    await loader.present();

    this.propertyService.generatelist({ auction_id: 32 }).subscribe({
      next: (res: any) => {
        console.log(res);
        this.response = res;
        this.properties = res?.result?.records ?? [];
        console.log(this.properties);

        loader.dismiss();
      },
      error: async () => {
        loader.dismiss();

        const toast = await this.toastCtrl.create({
          message: 'Failed to load properties',
          duration: 2000,
          color: 'danger',
        });

        await toast.present();
      },
    });
  }

  openDetails(id: number) {
    console.log('Property ID:', id);

    this.navCtrl.navigateForward(`/property-details/${id}`);
    // this.route.navigate(['/property-details', property.id]);
  }
}
