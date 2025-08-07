import { Component } from '@angular/core';
import { ExplorerComponent } from './features/explorer/explorer.component';

@Component({
  selector: 'app-root',
  imports: [ExplorerComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
