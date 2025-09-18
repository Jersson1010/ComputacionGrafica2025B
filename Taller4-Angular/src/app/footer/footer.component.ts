import { Component } from '@angular/core';
import { SubfootersComponent } from '../subfooters/subfooters.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SubfootersComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
