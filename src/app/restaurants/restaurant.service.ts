import { Restaurant } from './restaurant.model';
import {OfferService} from "./offer.service";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";

@Injectable()
export class RestaurantService {

  // TODO: unsubscribe
  resSubject = new Subject<Restaurant[]>();

  private restaurants: Restaurant[] = [];

  private filteredRestaurants: Restaurant[] = [];

  constructor(offerService: OfferService) {
    const r1 = new Restaurant(
      'asian-palace',
      'Asian Palace',
      'ul. Grójecka 42',
      'Warsaw',
      'Nowe miejsce dla wszystkich miłośników kuchni indyjskiej i pakistańskiej. Położone w samym sercu warszawskiej Ochoty, zjednało sobie już duże grono stałych gości. W stolicy nie ma zbyt wielu restauracji, w których spróbować można kuchni pakistańskiej. Wprowadzenie do menu dań z tej części Azji jest korzystnym urozmaiceniem, ponieważ kuchnia ta, mimo swojej niewątpliwej orientalności, dysponuje łagodniejszymi smakami. W karcie dań można znaleźć aromatyczne dania skąpane w gęstych sosach masala, propozycje dla wegetarian oraz fanów zup, tradycyjne placki oraz indyjskie napoje jogurtowe – lassi. Należy pamiętać, że w lokalu nie jest serwowany alkohol oraz że jest to kuchnia halal.',
      '/assets/restaurants/asian-palace.jpg',
      52.2178822,
      20.9799193
    );
    r1.offers = offerService.getOffersByRestaurant('asian-palace');
    this.restaurants.push(r1);

    const r2 =  new Restaurant(
      'der-elefant',
      'Der Elefant',
      'pl. Bankowy 1',
      'Warsaw',
      'Po niemal 20 latach przyszedł czas na zmiany i dziś jest to lokal, który wystrojem i klimatem potrafi oczarować gości. Zaprojektowany z wielkim rozmachem dziedziniec, przez który wchodzi się do restauracji, latem zamienia się w eleganckie patio. Do dyspozycji gości są zróżnicowane klimatycznie sale na trzech poziomach, niektóre z nich projektował laureat Oscara – Allan Starski. W menu znajdziemy dania ze wszystkich stron świata. Skosztujemy soczystych mięs, świeżych egzotycznych ryb lub owoców morza. To idealne miejsce na spędzenie przerwy w pracy lub rodzinny obiad.',
      '/assets/restaurants/der-elefant.jpg',
      52.2417654,
      21.001179
    );
    r2.offers = offerService.getOffersByRestaurant('der-elefant');
    this.restaurants.push(r2);

    const r3 = new Restaurant(
      'besamim',
      'Besamim',
      'ul. Anielewicza 6',
      'Warsaw',
      'Besamim to restauracja zlokalizowana w nowoczesnym wnętrzu Muzeum Historii Żydów Polskich. Wejście nie wymaga zakupu biletu do muzeum. Restauracja obsługuje w większości osoby zwiedzające muzeum, stąd samoobsługowa forma, stonowany charakter i otwarcie w godzinach pracy muzeum. Specjalnością są tutaj dania kuchni żydowskiej, ale w codziennej ofercie znajdziesz też specjały polskie i międzynarodowe. Dostępne są również gotowe dania koszerne z certyfikatem, które można zamówić na miejscu w restauracji lub na wynos. Warto spróbować rosołu z kulkami macowymi i gulaszu wołowego po sefardyjsku oraz win koszernych. W lokalu można urządzić imprezy zamknięte i przyjęcia okolicznościowe.',
      '/assets/restaurants/besamim.jpg',
      52.2493253,
      20.991106
    );
    r3.offers = offerService.getOffersByRestaurant('besamim');
    this.restaurants.push(r3);

    const r4 = new Restaurant(
      'waniliowa',
      'Waniliowa',
      'Al. Władysława Reymonta 15',
      'Warsaw',
      'W restauracji Waniliowa zasmakujesz w wyszukanych, ciekawych i innowacyjnych daniach kuchni autorskiej Bartłomieja Rogowskiego. Skomponowane przez niego menu zawsze zaskakuje – łączy w sobie kreatywność i otwartość na nowe smaki. Szef kuchni sięga do najlepszych dań z całego świata, dlatego najprościej nazwać tutejszą kuchnię międzynarodową. Nie zabraknie również tego co najlepsze na polskich stołach. Menu opiera się na zdrowych, regionalnych i najwyższej jakości składnikach. Wnętrze wykończone jest w stylu południowym, dopełnionym białymi obrusami, świeżymi kwiatami i świecami. To idealne miejsce na chwilę wytchnienia. W restauracji można zorganizować imprezy okolicznościowe i spotkania firmowe.',
      '/assets/restaurants/waniliowa.jpg',
      52.2748847,
      20.9350116
    );
    r4.offers = offerService.getOffersByRestaurant('waniliowa');
    this.restaurants.push(r4);

    const r5 = new Restaurant(
      'sloik',
      'Słoik',
      'ul. Złota 11',
      'Warsaw',
      'W ścisłym centrum Warszawy przy ul. Złotej 11 znajdziesz ciekawe miejsce – Słoik – restaurację z koktajl barem. Nazwa nawiązuje do domowej kuchni, przetworów oraz wszystkich produktów, które można schować do weków. Serwują tu dania przygotowane w duchu idei slow food, kuchnię inspirowaną polskimi smakami w nowoczesnym wydaniu. W menu nie brakuje dań jarskich. Bar oferuje autorskie koktajle, polskie piwa, bogaty wybór win i alkoholi. Ciekawostką jest, że większość potraw podawana jest gościom w słoikach, które stanową tez nieodłączny element wystroju wnętrza. Do dyspozycji gości są trzy sale na parterze, piętrze, w piwnicy oraz taras. Ciekawe miejsce na imprezy firmowe i w gronie znajomych.',
      '/assets/restaurants/sloik.jpg',
      52.2323484,
      21.0092015
    );
    r5.offers = offerService.getOffersByRestaurant('sloik');
    this.restaurants.push(r5);

    this.filteredRestaurants = this.restaurants;

    //this.filterRestaurants({});
  }

  filterRestaurants(params: any) {
    let filteredRestaurants: Restaurant[] = [];

    for (let restaurant of this.restaurants) {
      if (params.city && params.city != restaurant.city.toLowerCase()) {
       continue;
      }

      let r: Restaurant = restaurant.copy();
      r.offers = restaurant.offers.filter(function (offer) {
        if (params.priceFrom && offer.price < params.priceFrom) {
          return false;
        }

        if (params.priceTo && offer.price > params.priceTo) {
          return false;
        }

        if (params.dateFrom) {
          let paramDateFrom = new Date(params.dateFrom);
          paramDateFrom.setHours(0,0,0,0);
          if (paramDateFrom > offer.dateTo) {
            return false;
          }
        }

        if (params.dateTo) {
          let paramDateTo = new Date(params.dateTo);
          paramDateTo.setHours(0,0,0,0);
          if (paramDateTo < offer.dateFrom) {
            return false;
          }
        }

        if (params.timeFrom && params.timeFrom >= offer.timeTo) {
          return false;
        }

        if (params.timeTo && params.timeTo <= offer.timeFrom) {
          return false;
        }

        return true;
      });

      if (r.offers.length > 0) {
        filteredRestaurants.push(r);
      }
    }

   this.filteredRestaurants = filteredRestaurants;
    this.resSubject.next(filteredRestaurants);
  }

  getRestaurants() {
    return this.restaurants.slice();
  }

  getFilteredRestaurants() {
    return this.filteredRestaurants.slice();
  }

  getRestaurant(id: string) {
    // TODO: change to
    for (let restaurant of this.filteredRestaurants) {
      if(restaurant.id == id) {
        return restaurant;
      }
    }
  }

}
