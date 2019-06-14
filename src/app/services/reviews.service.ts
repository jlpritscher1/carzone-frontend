import { Injectable } from '@angular/core';
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
    console.log(review);
    return this.http.post('http://carzone.herokuapp.com/reviews', review).subscribe((response) => console.log(response));
  }
}
