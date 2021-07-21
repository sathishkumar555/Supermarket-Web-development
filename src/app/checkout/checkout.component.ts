import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }
isShown: boolean;
  ngOnInit(): void {
    this.isShown=false;
  }
  toggleShow(){
    this.isShown=! this.isShown;
    setTimeout(()=>{
      window.location.href = "/";
    },4000)
  }

}
