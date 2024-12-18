import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'services',
    component: ServicesPageComponent
  }
];
