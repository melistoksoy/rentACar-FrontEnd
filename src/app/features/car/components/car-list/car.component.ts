import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/features/car/models/car';
import { CarsAbstractService } from '../../services/abstracts/cars-abstract.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[];
  textFilter:string='';
  selectedCar: Car;
 

  constructor(
    private router: Router,
    private carsAbstractService: CarsAbstractService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCarByBrandId(params['id']);
      } else {
        this.getCar();
      }
    });
  }

  getCar() {
    this.carsAbstractService
      .getCarList()
      .subscribe((response) => (this.cars = response));
  }

  btnClick() {
    this.router.navigate(['mete']);
  }


  showDetails(car: Car) {
    this.selectedCar = car;
  }
  
  hideDetails() {
    this.selectedCar = null;
  }
  
  getCarByBrandId(brandId: number) {
   this.carsAbstractService.getCarByBrandId(brandId).subscribe((response) => {
     this.cars = response;
   });
  }
 
}
