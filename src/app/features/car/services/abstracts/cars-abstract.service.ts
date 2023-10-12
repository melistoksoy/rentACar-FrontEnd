import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/features/car/models/car';

@Injectable({
  providedIn: 'root'
})
export abstract class CarsAbstractService {

   abstract getCarList():Observable<Car[]>

   abstract getCarByBrandId(brandId:number):Observable<Car[]>


}
