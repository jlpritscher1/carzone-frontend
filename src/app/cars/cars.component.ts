import { Component, OnInit } from '@angular/core';

import { CarsService } from '../services/cars.service';
import { CarModel } from '../models/carModel';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars: CarModel[];
  allCars: CarModel[];

  constructor(private carsService: CarsService) {
  
  }
  
  selectCar(){
    console.log("You have selected this car.")
  }
  ngOnInit() {
   /*  this.cars = this.carService.findAllProducts(); //Finds all of our carss and gives it to us
    console.log(this.cars) */
    this.carsService.getInitialCars().subscribe((data) => {
      this.allCars = data as CarModel[];
      this.cars = this.allCars.slice(1,9);
    });
  }

  printCars() {
    console.log(this.cars.slice(1,9));
  }

  queryCars(queryParams) {
    console.log(queryParams);
    this.cars = [];
    for( var car of this.allCars) {

      var addCar = true;

      if(queryParams.make != "Make") {
        if(queryParams.make.toLowerCase() != car.make.toLowerCase()) {
          addCar = false;
        }
      }

      if(queryParams.model != "Model") {
        if(queryParams.model.toLowerCase() != car.model.toLowerCase()) {
          addCar = false;
        }
      }

      if(queryParams.color != "Color") {
        if(queryParams.model.toLowerCase() != car.color.toLowerCase()) {
          addCar = false;
        }
      }

      if(queryParams.bodyType != "Body Type") {
        if(queryParams.bodyType.toLowerCase() != car.bodyType.toLowerCase()) {
          addCar = false;
        }
      }

      if(queryParams.minPrice != null) {
        if(queryParams.minPrice >= car.price ) {
          addCar = false;
        }
      }

      if(queryParams.maxPrice != null) {
        if(queryParams.maxPrice <= car.price) {
          addCar = false;
        }
      }

      if(queryParams.maxMileage != null) {
        if(queryParams.maxMileage >= car.mileage) {
          addCar = false;
        }
      }
      if(addCar) {
        this.cars.push(car);
      }
    }

  }

  resetCars() {
    this.cars = this.allCars.slice(1,9);
  }

}
