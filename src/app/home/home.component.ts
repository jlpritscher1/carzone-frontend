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

  constructor(private reviewsService: ReviewsService) { }

  ngOnInit() {
    this.reviewsService.getReviews().subscribe((data) => {
      this.reviews = data as ReviewModel[];
      this.reviews = this.reviews.slice(1,6); 
    });
  }
  

}
