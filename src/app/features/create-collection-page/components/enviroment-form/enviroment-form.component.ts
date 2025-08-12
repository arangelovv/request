import { Component } from '@angular/core';
import { LucideAngularModule, Plus, Trash2 } from 'lucide-angular';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface EnviromentVariable {
  key: string | undefined;
  value: string | undefined;
  description: string | undefined;
}

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
    const envVar: EnviromentVariable = {
      key: this.enviromentForm.value.key,
      value: this.enviromentForm.value.value,
      description: this.enviromentForm.value.description,
    };
    this.enviromentVariables.push(envVar);
    this.enviromentForm.reset();
    console.log('Enviroment Variable Saved:', envVar);
    console.log('Current Enviroment Variables:', this.enviromentVariables);
  }

  removeEnviromentVariable(index: number) {
    this.enviromentVariables.splice(index, 1);
    console.log('Enviroment Variable Removed at index:', index);
    console.log('Current Enviroment Variables:', this.enviromentVariables);
  }
}
