import { Component, signal } from '@angular/core';
import { LucideAngularModule, X, Save } from 'lucide-angular';
import { BasicsFormComponent } from './components/basics-form/basics-form.component';
import { NgComponentOutlet } from '@angular/common';
import { EnviromentFormComponent } from './components/enviroment-form/enviroment-form.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { RequestsFormComponent } from './components/requests-form/requests-form.component';
import { RouterLink } from '@angular/router';

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
