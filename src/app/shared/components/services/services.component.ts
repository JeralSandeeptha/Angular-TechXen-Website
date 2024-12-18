import { Component } from '@angular/core';
import { UpArrowComponent } from "../up-arrow/up-arrow.component";
import { ServiceCardComponent } from "../service-card/service-card.component";
import { Service } from '../../../../typescript/interfaces/models.types';
import { SectionTitleComponent } from "../section-title/section-title.component";
import { FooterComponent } from "../footer/footer.component";
import { FooterUpperComponent } from "../footer-upper/footer-upper.component";

@Component({
  selector: 'app-services',
  imports: [ServiceCardComponent, SectionTitleComponent, FooterComponent, FooterUpperComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  ourServcies: Service[] = [
    { id: 1, imageURL: 'https://res.cloudinary.com/djgwvmcdl/image/upload/v1734523220/texen_website/service-icon5_g6jjbi.png', serviceDescription: 'Harness the power of the cloud with our robust cloud computing solutions. Whether you are looking to migrate to the cloud, optimize your existing infrastructure, or build scalable cloud-native.', serviceTitle: 'Cloud Computing Solutions' },
    { id: 2, imageURL: 'https://res.cloudinary.com/djgwvmcdl/image/upload/v1734523207/texen_website/service-icon2_yorxqd.png', serviceDescription: 'Unlock actionable insights and drive informed decision-making with our advanced data analytics and business intelligence services. Our data-driven approach empowers you to harness the full potential.', serviceTitle: 'Data Analytics & Business Intelligence' },
    { id: 3, imageURL: 'https://res.cloudinary.com/djgwvmcdl/image/upload/v1734523217/texen_website/service-icon3_ut2m7f.png', serviceDescription: 'Protect your business from evolving cyber threats and ensure compliance with industry regulations with comprehensive.', serviceTitle: 'Cybersecurity & Compliance' },
    { id: 4, imageURL: 'https://res.cloudinary.com/djgwvmcdl/image/upload/v1734523215/texen_website/service-icon4_x564iy.png', serviceDescription: 'Transform your ideas into reality with our custom software development and integration services whether you need.', serviceTitle: 'Software Development' },
    { id: 5, imageURL: 'https://res.cloudinary.com/djgwvmcdl/image/upload/v1734523220/texen_website/service-icon5_g6jjbi.png', serviceDescription: 'Navigate the complexities of the digital landscape with confidence with our IT consulting and support services.', serviceTitle: 'It Consulting & Support' },
  ];
}
