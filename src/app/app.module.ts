import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {HeaderComponent} from './header/header.component';
import {RestaurantListComponent} from './restaurants/restaurant-list/restaurant-list.component';
import {RestaurantItemComponent} from './restaurants/restaurant-list/restuarant-item/restaurant-item.component';
import {RestaurantDetailComponent} from "./restaurants/restaurant-detail/restaurant-detail.component";
import {AppRoutingModule} from "./app-routing.module";
import {RestaurantMapComponent} from './restaurants/restaurant-map/restaurant-map.component';
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    HeaderComponent,
    RestaurantListComponent,
    RestaurantItemComponent,
    RestaurantDetailComponent,
    RestaurantMapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC3nIq8GXqrQ4sSj1I-5M11YbR1SwBQwU8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
