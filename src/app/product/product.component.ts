import { Component, OnInit, Input, TemplateRef, ViewEncapsulation  } from '@angular/core';
import { BsModalService, BsModalRef, } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class ProductComponent implements OnInit {
  @Input() product!:string;
  showText = false;
  what = true;

  
  ngOnInit(): void {
  }


  modalRef?: BsModalRef;
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false,
    class: "my-modal"
  };
  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

}
