import {environment} from "../../environments/environment";
export class Offer {

  id: string;

  restaurantId: string;

  name: string;

  price: number;

  dateFrom: Date;

  dateTo: Date;

  timeFrom: string;

  timeTo: string;

  discount: number;

  photo: string;

  constructor(id: string, restaurantId: string, name: string, price: number, dateFrom: Date, dateTo: Date, timeFrom: string, timeTo: string, discount: number, photo: string) {
    this.id = id;
    this.restaurantId = restaurantId;
    this.name = name;
    this.price = price;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo
    this.timeFrom = timeFrom;
    this.timeTo = timeTo;
    this.discount = discount;
    this.photo = photo;
  }

  getThumbnail() {
    return environment.subfolder + this.photo.replace('.jpg', '-m.jpg');
  }

}
