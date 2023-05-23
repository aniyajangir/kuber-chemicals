import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { HydratedLimeComponent } from './components/hydrated-lime/hydrated-lime.component';
import { QuickLimeComponent } from './components/quick-lime/quick-lime.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import {LimestoneComponent} from './components/limestone/limestone.component';
import { SuccessComponent } from './components/success/success.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'products', component: ProductsComponent},
  {path:'hydrated-lime', component: HydratedLimeComponent},
  {path:'quick-lime', component: QuickLimeComponent},
  {path:'applications', component: ApplicationsComponent},
  {path:'limestone', component:LimestoneComponent},
  {path:'success', component: SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
