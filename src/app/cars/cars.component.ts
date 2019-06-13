import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor() {
    {

    }
  }
  
  selectCar(){
    console.log("You have selected this car.")
  }
  ngOnInit() {
   /*  this.cars = this.carService.findAllProducts(); //Finds all of our carss and gives it to us
    console.log(this.cars) */
  }

}
