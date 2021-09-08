import {Offer} from "./offer.model";

export class OfferService {

  monday: Date = OfferService.getNextWeekDay(1);

  tuesday: Date = OfferService.getNextWeekDay(2);

  wednesday: Date = OfferService.getNextWeekDay(3);

  thursday: Date = OfferService.getNextWeekDay(4);

  friday: Date = OfferService.getNextWeekDay(5);

  offers: Offer[] = [
    new Offer('butter-chicken', 'asian-palace', 'Butter Chicken', 20, this.monday, this.monday, '13:00', '18:00', 20, '/assets/food/butter-chicken.jpg'),
    new Offer('chicken-korma', 'asian-palace', 'Chicken Korma', 22, this.tuesday, this.tuesday, '15:00', '18:00', 20, '/assets/food/chicken-korma.jpg'),

    new Offer('kimchi-burger', 'der-elefant', 'Kimchi Burger', 18, this.monday, this.tuesday, '12:00', '16:00', 30, '/assets/food/kimchi-burger.jpg'),
    new Offer('new-york-strip-steak', 'der-elefant', 'New York Strip Steak', 30, this.wednesday, this.thursday, '17:00', '21:00', 30, '/assets/food/new-york-strip-steak.jpg'),

    new Offer('losos-po-marokansku', 'besamim', 'Łosoś po marokańsku', 36, this.wednesday, this.wednesday, '11:00', '14:00', 35, '/assets/food/losos-po-marokansku.jpg'),
    new Offer('musaka-z-cieleciny', 'besamim', 'Musaka z cielęciny', 27, this.friday, this.friday, '17:00', '22:00', 20, '/assets/food/musaka-z-cieleciny.jpg'),

    new Offer('krewetki-tygrysie-w-winie', 'waniliowa', 'Krewetki tygrysie w winie', 22, this.thursday, this.thursday, '15:00', '18:00', 20, '/assets/food/krewetki-tygrysie-w-winie.jpg'),
    new Offer('piers-z-kurczaka-z-sosem-rabarbarowym', 'waniliowa', 'Pierś z kurczaka z sosem rabarbarowym', 18, this.monday, this.tuesday, '12:00', '16:00', 25, '/assets/food/piers-z-kurczaka-z-sosem-rabarbarowym.jpg'),

    new Offer('stek-z-rostbefu-300g', 'sloik', 'Stek z rostbefu 300g', 22, this.friday, this.friday, '15:00', '18:00', 30, '/assets/food/stek-z-rostbefu-300g.jpg'),
    new Offer('pierogi-ruskie', 'sloik', 'Pierogi ruskie', 18, this.wednesday, this.friday, '12:00', '16:00', 35, '/assets/food/pierogi-ruskie.jpg')
  ];

  getOffersByRestaurant(restaurantId: string) {
    let offers = this.offers.slice();
    return offers.filter(function (offer) {
      return offer.restaurantId == restaurantId;
    });
  }

  private static getNextWeekDay(dayNr: number) {
    let day: Date = new Date();
    day.setDate(day.getDate() + (dayNr + 7 - day.getDay()) % 7);
    day.setHours(0, 0, 0, 0);
    return day;
  }

}
