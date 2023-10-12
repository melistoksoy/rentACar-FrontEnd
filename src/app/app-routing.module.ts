import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './features/car/components/car-list/car.component';
import { BrandComponent } from './pages/brand/brand.component';
import { Not404Component } from './shared/components/not404/not404.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars/:id",pathMatch:"full",component:CarComponent},
  {path:"mete",component:BrandComponent},
  {path:"**",component:Not404Component}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
