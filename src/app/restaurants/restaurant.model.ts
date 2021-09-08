import {Offer} from "./offer.model";
import {environment} from "../../environments/environment";

export class Restaurant {

  id: string;

  name: string;

  address: string;

  city: string;

  description: string;

  photo: string;

  lat: number;

  lng: number;

  offers: Offer[] = [];

  constructor(id: string, name: string, address: string, city: string, description: string, photo: string, lat: number, lng: number) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.city = city;
    this.description = description;
    this.photo = photo;
    this.lat = lat;
    this.lng = lng;
  }

  getThumbnail() {
    return this.getPhoto().replace('.jpg', '-m.jpg');
  }

  getPhoto() {
    return environment.subfolder + this.photo;
  }

  getHighestDiscount() {
    if (!this.offers.length) {
      return 0;
    }
    return Math.max.apply(Math,this.offers.map(function(offer){
      return offer.discount;
    }));
  }

  copy() {
    return new Restaurant(this.id, this.name, this.address, this.city, this.description, this.photo, this.lat, this.lng);
  }

}
