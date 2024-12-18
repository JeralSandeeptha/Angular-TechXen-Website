import { Component } from '@angular/core';
import { TopBannerComponent } from '../../shared/components/top-banner/top-banner.component';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { HomeHeroComponent } from "../../shared/components/home-hero/home-hero.component";
import { FooterUpperComponent } from "../../shared/components/footer-upper/footer-upper.component";

@Component({
  selector: 'app-home-page',
  imports: [
    TopBannerComponent,
    NavbarComponent,
    HomeHeroComponent,
    FooterUpperComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
