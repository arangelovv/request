import { Component, signal, WritableSignal } from '@angular/core';
import { AuthType } from '../../../../shared/entities';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  imports: [FormsModule],
  templateUrl: './auth-form.component.html',
  styles: ``,
})
export class AuthFormComponent {
  authType: WritableSignal<AuthType> = signal('none');

  onChangeAuthType(type: any): void {
    this.authType.set(type);
    console.warn(`Auth type changed to: ${this.authType()}`);
  }
}
