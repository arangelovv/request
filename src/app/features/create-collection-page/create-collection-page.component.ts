import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, X, Save } from 'lucide-angular';
import { NgComponentOutlet } from '@angular/common';
import {
  BasicsFormComponent,
  EnviromentFormComponent,
  AuthFormComponent,
  RequestsFormComponent,
} from './components/index';

enum ActiveTab {
  Basics,
  Enviroment,
  Auth,
  Requests,
}

@Component({
  selector: 'app-create-collection-page',
  imports: [LucideAngularModule, NgComponentOutlet, RouterLink],
  templateUrl: './create-collection-page.component.html',
  styles: ``,
})
export class CreateCollectionPageComponent {
  readonly CancelIcon = X;
  readonly SaveIcon = Save;

  activeTabStyle =
    'px-4 py-2 text-sm font-medium border-b-2 transition-colors border-violet-500 text-violet-600 cursor-pointer';
  inactiveTabStyle =
    'px-4 py-2 text-sm font-medium border-b-2 transition-colors border-transparent text-gray-500 hover:text-gray-700 cursor-pointer';

  isActive = signal<ActiveTab>(0);

  renderTabForm() {
    switch (this.isActive()) {
      case 0:
        return BasicsFormComponent;
      case 1:
        return EnviromentFormComponent;
      case 2:
        return AuthFormComponent;
      case 3:
        return RequestsFormComponent;
    }
    return BasicsFormComponent;
  }
}
