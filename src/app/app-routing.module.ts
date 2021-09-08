import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {RestaurantDetailComponent} from "./restaurants/restaurant-detail/restaurant-detail.component";
import {RestaurantListComponent} from "./restaurants/restaurant-list/restaurant-list.component";
import {RestaurantsComponent} from "./restaurants/restaurants.component";
import {RestaurantMapComponent} from "./restaurants/restaurant-map/restaurant-map.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' },
  { path: 'restaurants', component: RestaurantsComponent, children: [
    {path: '', component: RestaurantListComponent},
    {path: 'map', component: RestaurantMapComponent},
    {path: ':id', component: RestaurantDetailComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
