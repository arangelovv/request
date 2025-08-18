import { Component } from '@angular/core';
import { LucideAngularModule, Plus, Trash2 } from 'lucide-angular';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EnviromentVariable } from '../../../../shared/entities';

@Component({
  selector: 'app-enviroment-form',
  imports: [LucideAngularModule, ReactiveFormsModule],
  templateUrl: './enviroment-form.component.html',
  styles: ``,
})
export class EnviromentFormComponent {
  readonly PlusIcon = Plus;
  readonly DeleteIcon = Trash2;

  enviromentVariables: Array<EnviromentVariable> = [];

  enviromentForm = new FormGroup({
    key: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    value: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    description: new FormControl<string>('', { nonNullable: true }),
  });

  saveEnviromentVariable() {
    if (this.enviromentForm.valid) {
      console.warn('Form is valid!');
      const envVar: EnviromentVariable = {
        key: this.enviromentForm.value.key,
        value: this.enviromentForm.value.value,
        description: this.enviromentForm.value.description,
      };
      console.log('Enviroment Variable Saved:', envVar);
      this.enviromentVariables.push(envVar);
      console.log('Current Enviroment Variables:', this.enviromentVariables);
      this.enviromentForm.reset();
    } else {
      console.warn('Form is invalid, please check the inputs.');
    }
  }

  removeEnviromentVariable(index: number) {
    this.enviromentVariables.splice(index, 1);
    console.log('Enviroment Variable Removed at index:', index);
    console.log('Current Enviroment Variables:', this.enviromentVariables);
  }
}
