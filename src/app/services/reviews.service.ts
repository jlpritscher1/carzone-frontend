import { Injectable } from '@angular/core';
import { CarsService } from './cars.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReviewsService {


  constructor(private http: HttpClient) { }


 
  getReviews() {
    return this.http.get('http://carzone.herokuapp.com/reviews')
  }

  submitReview(review) {
    console.log(review)
    return this.http.post('http://carzone.herokuapp.com/reviews', review).subscribe(review_response => console.log(review_response));
  }

}
