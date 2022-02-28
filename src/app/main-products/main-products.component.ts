import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-products',
  templateUrl: './main-products.component.html',
  styleUrls: ['./main-products.component.css']
})
export class MainProductsComponent implements OnInit {
  
  itemsPerSlide = 5;
  singleSlideOffset = true;
  noWrap = false;
  showText = false;
  slidesChangeMessage = '';
  what = true;
  slides = [
    // {image: 'https://www.birdlife.org/sites/default/files/styles/full_1140x550/public/news/shutterstock_1451653292_1_1.jpg?itok=BWagqmnZ'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDe5VUiTyLU-GAd7AUTPLKccSSIpm0EyClAhqpo8sMpaxJPqS_jd6ZEs-VEhw3YloAho&usqp=CAU'},
    {image: 'https://i.ytimg.com/vi/IUN664s7N-c/maxresdefault.jpg'},
    {image: 'https://assets.unenvironment.org/styles/article_billboard_image/s3/2021-05/alberta-2297204_1920.jpg?h=1483c54f&amp;itok=GdjA9GRu'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbB6WQ7N6gQChXhGCOuy5VFu_vvX0ISKYAfg&usqp=CAU'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_2a7jSNbOYscCPNxad3D5QeGucgMnWfYyQ&usqp=CAU'},
    {image: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_91756359_Full.jpg?crop=0,283,4000,2100&wid=1200&hei=630&scl=3.3333333333333335'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK5NWDbfvoiVDspYox0h59nKRCrP2ylE8cSw&usqp=CAU'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr_aHEEUiggPXcLawpjV9Wn18ws5GNC5wZDqNkwxOS4rayJ3ttvBeF4KY4BNGcACBjXr4&usqp=CAU'},
    {image: 'https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/ad2cbdd2-3bca-4f96-9f11-7b57132b615a_scaled.jpg'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
