import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PropertyListingPage } from './property-list.page';

describe('PropertyListingPage', () => {
  let component: PropertyListingPage;
  let fixture: ComponentFixture<PropertyListingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyListingPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
