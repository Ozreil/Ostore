import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {

  constructor() { }

  val:number = 3;

  @ViewChild("slide") slideRef!: ElementRef;
  ngAfterViewInit(): void {
    this.slideRef.nativeElement.oninput = () => {
      this.myFunction();
    }
  }

  myFunction(){
    console.log("the vlaue ", this.slideRef.nativeElement.value);
    this.val = this.slideRef.nativeElement.value;
    this.slideRef.nativeElement.style.backgroundSize =(this.val ) * 100 / (5) + '% 100%'

  }
  ngOnInit(): void {
  }

}


