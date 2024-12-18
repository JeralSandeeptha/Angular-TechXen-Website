import { Component } from '@angular/core';
import { TextComponent } from "../text/text.component";

@Component({
  selector: 'app-footer',
  imports: [TextComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
