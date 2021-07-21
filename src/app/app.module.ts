import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { OrdertrackingComponent } from './ordertracking/ordertracking.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { CompareComponent } from './compare/compare.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutusComponent,
    CartpageComponent,
    CheckoutComponent,
    MyaccountComponent,
    WishlistComponent,
    ContactusComponent,
    LogRegComponent,
    OrdertrackingComponent,
    ProductPageComponent,
    ShopPageComponent,
    CompareComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',component:HomepageComponent},
      {path:'homepage',component:HomepageComponent},
      {path:'',component:HomepageComponent},
      {path:'cartpage',component:CartpageComponent},
      {path:'checkout',component:CheckoutComponent},
      {path:'contactus',component:ContactusComponent},
      {path:'aboutus',component:AboutusComponent},
      {path:'log-reg',component:LogRegComponent},
      {path:'myaccount',component:MyaccountComponent},
      {path:'ordertracking',component:OrdertrackingComponent},
      {path:'wishlist',component:WishlistComponent},
      {path:'product-page',component:ProductPageComponent},
      {path:'shop-page',component:ShopPageComponent},
      {path:'compare',component:CompareComponent}
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
