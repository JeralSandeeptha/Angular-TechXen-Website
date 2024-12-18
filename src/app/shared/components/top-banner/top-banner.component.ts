import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-banner',
  imports: [],
  templateUrl: './top-banner.component.html',
  styleUrl: './top-banner.component.scss'
})
export class TopBannerComponent {

  @Input() topBannerText: string = '';
}
