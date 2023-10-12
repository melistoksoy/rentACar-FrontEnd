import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/shared/models/brand';
import { BrandService } from 'src/app/shared/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit{
  
  brands:Brand[]=[]

  constructor(private brandService:BrandService){}

  ngOnInit(): void {
    this.getBrandAll()
  }
  getBrandAll(){
     this.brandService.getAllBrand().subscribe(response=>{
      this.brands=response
     })
  }
  


}
