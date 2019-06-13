import { Component, OnInit } from '@angular/core';

import { CarsService } from '../services/cars.service';
import { CarModel } from '../models/carModel';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  indexes: number[];
  cars: any;

  constructor(private carsService: CarsService) {
    this.indexes = [1,2,3,4,5,6,7,8];
  }
  
  selectCar(){
    console.log("You have selected this car.")
  }
  ngOnInit() {
   /*  this.cars = this.carService.findAllProducts(); //Finds all of our carss and gives it to us
    console.log(this.cars) */
    this.carsService.getInitialCars().subscribe((data) => {
      this.cars = data;
    });
  }

  printCars() {
    console.log(this.cars.slice(1,9));
  }

}
