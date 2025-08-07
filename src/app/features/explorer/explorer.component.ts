import { Component } from '@angular/core';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CollectionsListComponent } from './components/collections-list/collections-list.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-explorer',
  imports: [SearchbarComponent, CollectionsListComponent, RouterLink],
  templateUrl: './explorer.component.html',
})
export class ExplorerComponent {}
