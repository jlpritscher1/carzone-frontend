import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  numbers: number[];

  constructor() {
    this.numbers = [1,2,3,4,5,6,7,8];
  }
  
  selectCar(){
    console.log("You have selected this car.")
  }
  ngOnInit() {
   /*  this.cars = this.carService.findAllProducts(); //Finds all of our carss and gives it to us
    console.log(this.cars) */
  }

}
