import { Component } from '@angular/core';
import { TopBannerComponent } from '../../shared/components/top-banner/top-banner.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-contact-page',
  imports: [
    TopBannerComponent,
    NavbarComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

}
