import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CarouselComponent } from './carousel/carousel.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { CardEventComponent } from './card-event/card-event.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { TopEventComponent } from './top-event/top-event.component';
import { FormAnnonceTransporteurComponent } from './form-annonce-transporteur/form-annonce-transporteur.component';
import { SignupComponent } from './signup/signup.component';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    ListItemsComponent,
    CardEventComponent,
    FooterComponent,
    LoginComponent,
    TopEventComponent,
    FormAnnonceTransporteurComponent,
    SignupComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
