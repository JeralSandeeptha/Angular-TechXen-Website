import { Component, Input } from '@angular/core';
import { UpArrowComponent } from "../up-arrow/up-arrow.component";

@Component({
  selector: 'app-service-card',
  imports: [UpArrowComponent],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {

  @Input() imageURL:string = '';
  @Input() serviceTitle:string = '';
  @Input() serviceDescription:string = '';
}
