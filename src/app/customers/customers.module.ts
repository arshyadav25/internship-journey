import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
// import { InstagramComponent } from '../instagram/instagram.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  declarations: [
    CustomersComponent,
    // InstagramComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
        MatIconModule,
        MatSnackBarModule,
        MatSliderModule,
        
  ]
})
export class CustomersModule { }
