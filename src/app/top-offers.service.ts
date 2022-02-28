import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopOffersService {

  constructor() { }

  getTopOffersData(): string[] {
    let imgs: string[] = [
      "https://i.pinimg.com/originals/71/bb/ca/71bbca5651ac0589df0a36aa31dc188e.jpg",
      "https://i.imgur.com/m3eOjFP.jpg",
      "https://farm4.staticflickr.com/3699/10018672564_22dfbc1003_c.jpg"
    ];

    return imgs;
  }
  
}
