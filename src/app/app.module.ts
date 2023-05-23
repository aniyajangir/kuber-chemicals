import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { FeaturesComponent } from './components/features/features.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { ProductsComponent } from './components/products/products.component';
import { HydratedLimeComponent } from './components/hydrated-lime/hydrated-lime.component';
import { QuickLimeComponent } from './components/quick-lime/quick-lime.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { DividerComponent } from './components/divider/divider.component';
import { LimestoneComponent } from './components/limestone/limestone.component';
import { SuccessComponent} from './components/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    FeaturesComponent,
    ContactComponent,
    AboutComponent,
    ApplicationsComponent,
    WhyUsComponent,
    ProductsComponent,
    HydratedLimeComponent,
    QuickLimeComponent,
    HomeComponent,
    ServicesComponent,
    DividerComponent,
    LimestoneComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
