import { Component, OnInit } from '@angular/core';
import { TopOffersService } from '../top-offers.service';
@Component({
  selector: 'app-top-offers',
  templateUrl: './top-offers.component.html',
  styleUrls: ['./top-offers.component.css']
})
export class TopOffersComponent implements OnInit {

  imgs!: string[];

  constructor(private topOffersService:TopOffersService) { }


  ngOnInit(): void {
    this.getTopOffers();
  }

  getTopOffers():void{
    this.imgs = this.topOffersService.getTopOffersData();
  }

}
