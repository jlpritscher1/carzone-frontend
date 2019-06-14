import { Component, OnInit, ViewChild } from '@angular/core';
import { ReviewsService } from '../services/reviews.service';
import { ReviewModel } from '../models/reviewModel'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('carChild', {static: false}) carChild;

  reviews: ReviewModel[];
  searchParams: {};

  constructor(private reviewsService: ReviewsService) { 
    this.searchParams = {
      make: 'Make',
      model: 'Model',
      color: 'Color',
      bodyType: 'Body Type',
      minPrice: null,
      maxPrice: null,
      maxMileage: null
    }
  }

  ngOnInit() {
    this.reviewsService.getReviews().subscribe((data) => {
      this.reviews = data as ReviewModel[];
      this.reviews = this.reviews.slice(1,6); 
    });
  }
  
  searchCars() {
    this.carChild.queryCars(this.searchParams);
  }

  resetCars() {
    this.carChild.resetCars();
  }

}
