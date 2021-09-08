import {Component, OnInit} from '@angular/core';
import {HeaderService} from "../../header/header.service";
import {RestaurantService} from "../restaurant.service";
import {Restaurant} from "../restaurant.model";

declare let google: any;

@Component({
  selector: 'app-restaurant-map',
  templateUrl: './restaurant-map.component.html',
  styleUrls: ['./restaurant-map.component.css']
})
export class RestaurantMapComponent implements OnInit {

  lat: number = 52.230018;

  lng: number = 21.010979;

  zoom: number = 11;

  restaurants: Restaurant[] = [];

  myMarker: any;

  animationInterval: any;

  constructor(private headerService: HeaderService,
              private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurants = this.restaurantService.getFilteredRestaurants();
    this.restaurantService.resSubject.subscribe((restaurants: Restaurant[]) => {
      this.restaurants = restaurants;
      console.log(this.restaurants);
    });
    this.headerService.setRigthSide('list');
  }

  mapIsReady(map) {
    this.showMyLocation(map);

    const myLocationContainer = document.getElementById('my-location-container');
    const myLocationButton = document.getElementById('my-location-button');
    const myLocationIcon = document.getElementById('my-location-icon');

    google.maps.event.addListener(map, 'center_changed', function () {
      myLocationIcon.style['background-position'] = '0 0';
    });

    myLocationButton.addEventListener('click', () => {
      this.showMyLocation(map);
    });

    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(myLocationContainer);
  }

  private setMarkerWithCurrentPosition(map, latlng) {
    if(this.myMarker) {
      this.myMarker.setPosition( latlng );
    } else {
      this.myMarker = new google.maps.Marker({
        map: map,
        position: latlng,
        icon: {
          path: "M-6,0a6,6 0 1,0 12,0a6,6 0 1,0 -12,0",
          fillColor: '#4285F4',
          fillOpacity: 1.0,
          anchor: new google.maps.Point(0,0),
          strokeWeight: 2,
          strokeColor: '#fff',
          scale: 1
        }
      });
    }
  }

  private showMyLocation(map) {
    const myLocationIcon = document.getElementById('my-location-icon');
    let imgX = '0';
    this.animationInterval = setInterval(function () {
      imgX = imgX === '-18' ? '0' : '-18';
      myLocationIcon.style['background-position'] = imgX+'px 0';
    }, 500);

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(latlng);
        this.setMarkerWithCurrentPosition(map, latlng);
        clearInterval(this.animationInterval);
        myLocationIcon.style['background-position'] = '-144px 0';
      });
    } else {
      clearInterval(this.animationInterval);
      myLocationIcon.style['background-position'] = '0 0';
    }
  }
}

// TODO: use in the future
interface marker {
  id: string;
  name: string;
  lat: number;
  lng: number;
}
