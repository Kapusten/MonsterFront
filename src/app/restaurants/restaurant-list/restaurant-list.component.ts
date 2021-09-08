import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant.model';
import { RestaurantService } from '../restaurant.service';
import {HeaderService} from "../../header/header.service";

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
})
export class RestaurantListComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private restaurantService: RestaurantService,
              private headerService: HeaderService) { }

  ngOnInit() {
    this.restaurants = this.restaurantService.getFilteredRestaurants();
    this.restaurantService.resSubject.subscribe((restaurants: Restaurant[]) => {
      this.restaurants = restaurants;
    });
    this.headerService.setRigthSide('map');
  }

}
