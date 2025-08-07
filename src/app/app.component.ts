import { Component } from '@angular/core';
import { ExplorerComponent } from './features/explorer/explorer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ExplorerComponent, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {}
