import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../services/reviews.service';
import { ReviewModel } from '../models/reviewModel'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  reviews: ReviewModel[];
  newReview: {}

  constructor(private reviewsService: ReviewsService) { 
    this.newReview = {
      name: null,
      rating: "Rating",
      message: null
    }
    
  }

  ngOnInit() {
    this.reviewsService.getReviews().subscribe((data) => {
      this.reviews = data as ReviewModel[];
      this.reviews = this.reviews.slice(1,6); 
    });
  }
  
  submitReview() {
    this.reviewsService.submitReview(this.newReview);
  }

}
