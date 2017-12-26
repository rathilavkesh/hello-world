import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { LandingPageRoutingModule } from './landing-page-routing.module';

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    LandingPageRoutingModule
  ],
  declarations: [
    LandingPageComponent
  ]
})
export class LandingPageModule { }
