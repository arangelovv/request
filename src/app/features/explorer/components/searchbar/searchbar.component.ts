import { Component } from '@angular/core';
import { LucideAngularModule, Search } from 'lucide-angular';

@Component({
  selector: 'app-searchbar',
  imports: [LucideAngularModule],
  templateUrl: './searchbar.component.html',
  styles: ``,
})
export class SearchbarComponent {
  readonly SearchIcon = Search;
}
