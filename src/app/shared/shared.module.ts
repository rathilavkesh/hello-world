import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalComponentDependencyModule } from '../external-modules/external-modules.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from 'app/shared/footer/footer.component';

@NgModule({
  imports: [
    ExternalComponentDependencyModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    ExternalComponentDependencyModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
