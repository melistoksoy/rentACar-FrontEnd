import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaviComponent } from './components/navi/navi.component';
import { Not404Component } from './components/not404/not404.component';
import { FilterPipe } from '../features/car/pipes/filter.pipe';



@NgModule({
  declarations: [
    NaviComponent,
    Not404Component,
   
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NaviComponent,
    Not404Component,
    
  ]
})
export class SharedModule { }
