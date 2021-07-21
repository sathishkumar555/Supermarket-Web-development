import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = [1, 2, 3, 4, 5,6].map((n) => `/assets/img/l${n}.jpg`);

}
