import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {  HttpClientModule } from '@angular/common/http';






import { HomeComponent } from './comps/home/home.component';
import { UserComponent } from './comps/user/user.component';
import { ProfileComponent } from './comps/profile/profile.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { PortfolioComponent } from './comps/portfolio/portfolio.component';
import { ContactUsComponent } from './comps/contact-us/contact-us.component';
import { AboutComponent } from './comps/about/about.component';
import { FooterComponent } from './comps/footer/footer.component';
import { UserService } from './services/user.service';






const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about', component: AboutComponent },

  {
    path: 'user',
    component: UserComponent,
    data: { title: 'User List' }
  },


  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  }


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    UserComponent,
    NavbarComponent,
    PortfolioComponent,
    ContactUsComponent,
    AboutComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
