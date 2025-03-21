import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisneyComponent } from './disney/disney.component';
import{YoutubeComponent}from'./youtube/youtube.component'
import { NetflixComponent } from './netflix/netflix.component';
import { RoutingComponent } from './routing/routing.component';
import { ApiComponent } from './api/api.component';
import { MatiralComponent } from './matiral/matiral.component';
import { InstagramComponent } from './instagram/instagram.component';
import { BuyNowComponent } from './buy-now/buy-now.component';

const routes: Routes = [
  {path: '', redirectTo: '/routing', pathMatch: 'full' },
  {path:'disney',component:DisneyComponent},
  {path:'youtube',component:YoutubeComponent},
  {path:'netflix',component:NetflixComponent},
  {path:'routing',component:RoutingComponent},
  {path:'api',component:ApiComponent},
  {path:'instagram',component:InstagramComponent},
  {path:'matiral',component:MatiralComponent},
  {path:'buy-now',component:BuyNowComponent},

 
 

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
