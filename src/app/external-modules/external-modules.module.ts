import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatGridList,
  MatGridListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatListModule,
  MatFormFieldModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    NgbModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class ExternalComponentDependencyModule { }
