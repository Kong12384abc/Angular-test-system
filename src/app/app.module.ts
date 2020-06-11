import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { NavvComponent } from './navv/navv.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DropComponent } from './drop/drop.component';

  



@NgModule({
  declarations : [ 
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    NavvComponent,
    DropComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
     { path:'', component: HomeComponent},
     { path:'about', component: AboutComponent},
     { path: 'contact', component: ContactComponent},
     { path: 'product', component: ProductComponent}
    ])
    
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
