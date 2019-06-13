import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  /***************************************************  
  *  Get initial list of cars with no parameter search 
  ***************************************************/
  getInitialCars() {
    return this.http.get('https://carzone.herokuapp.com/cars')
  }

}
