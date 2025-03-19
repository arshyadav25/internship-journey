import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { DisneyComponent } from './disney/disney.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { NetflixComponent } from './netflix/netflix.component';
import { RoutingComponent } from './routing/routing.component';
import { ApiComponent } from './api/api.component';
import { HttpClientModule } from '@angular/common/http';
import { MatiralComponent , DialogComponent, ShopComponent,  Buynow_dialogComponent} from './matiral/matiral.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ScrollAnimationDirective } from './scroll-animation.directive';
import { InstagramComponent } from './instagram/instagram.component';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  declarations: [
    AppComponent,
    DisneyComponent,
    YoutubeComponent,
    NetflixComponent,
    RoutingComponent,
    ApiComponent,
    MatiralComponent,
    ScrollAnimationDirective,
    InstagramComponent,
    DialogComponent,
    ShopComponent,
    Buynow_dialogComponent
  

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatIconModule,
    MatSnackBarModule,
    MatSliderModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule, 
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatDatepickerModule,
    HttpClientModule,
    MatDialogModule, 
    MatBadgeModule
  ],
  exports:[
    MatIconModule,  
    MatSnackBarModule,
    MatSliderModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule, 
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatDatepickerModule,
    HttpClientModule,
    MatDialogModule,
  
    ],
  providers: [{provide:MAT_DIALOG_DATA,useValue:{}},{provide:MatDialogRef,useValue:{}}],
  bootstrap: [AppComponent]
})

export class AppModule { }
