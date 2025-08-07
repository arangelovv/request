import { Component } from '@angular/core';
import { SearchbarComponent } from './components/searchbar/searchbar.component';

@Component({
  selector: 'app-explorer',
  imports: [SearchbarComponent],
  templateUrl: './explorer.component.html',
})
export class ExplorerComponent {}
