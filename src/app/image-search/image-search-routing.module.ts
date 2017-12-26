import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageSearchComponent } from './image-search.component';

// Route Configuration
const routes: Routes = [
  { path: 'imageSearch', component: ImageSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ImageSearchRoutingModule { }
