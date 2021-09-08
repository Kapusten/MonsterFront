import {Component, OnDestroy, OnInit} from '@angular/core';
import {Restaurant} from "../restaurant.model";
import {ActivatedRoute, Params} from "@angular/router";
import {RestaurantService} from "../restaurant.service";
import {HeaderService} from "../../header/header.service";

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css'],
})
export class RestaurantDetailComponent implements OnInit, OnDestroy {

  restaurant: Restaurant;

  id: string;

  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute,
              private headerService: HeaderService) {
  }

  ngOnInit() {
    this.headerService.setRigthSide('empty');
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.restaurant = this.restaurantService.getRestaurant(this.id);
          this.headerService.setLeftSide('back');
        }
      )
  }

  ngOnDestroy() {
    this.headerService.setLeftSide('search');
    // TODO: unsubscribe??
    // TODO: maybe change header to normal one
  }

  addToCart(event) {
    // TODO: add to the cart
    alert('Added to cart');
  }

}
