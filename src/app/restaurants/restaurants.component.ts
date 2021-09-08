import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { RestaurantService } from './restaurant.service';
import {OfferService} from "./offer.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  providers: [RestaurantService, OfferService]
})
export class RestaurantsComponent implements OnInit {

  searchForm: FormGroup;

  @ViewChild('close') closeButton: ElementRef;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'city': new FormControl('warsaw'),
      'priceFrom': new FormControl(0),
      'priceTo': new FormControl(60), // TODO: max of all offers
      'dateFrom': new FormControl(RestaurantsComponent.getYearMonthDay(RestaurantsComponent.today())),
      'dateTo': new FormControl(RestaurantsComponent.getYearMonthDay(RestaurantsComponent.nextWeek())),
      'timeFrom': new FormControl('00:00'),
      'timeTo': new FormControl('23:59')
    });
  }

  onSearchSubmit() {
    console.log(this.searchForm);
    this.restaurantService.filterRestaurants(this.searchForm.getRawValue());
    this.closeButton.nativeElement.click();
  }

  private static getYearMonthDay(date: Date) {
    return date.toISOString().slice(0, 10);
  }

  private static today() {
    let date: Date = new Date();
    date.setHours(0,0,0,0);
    return date;
  }

  private static nextWeek() {
    let date: Date = new Date();
    date.setDate(date.getDate()+7);
    date.setHours(0,0,0,0);
    return date;
  }

}
