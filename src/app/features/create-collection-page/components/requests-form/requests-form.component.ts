import { Component } from '@angular/core';
import { LucideAngularModule, Plus, Trash2 } from 'lucide-angular';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReqType, Request } from '../../../../shared/entities';

@Component({
  selector: 'app-requests-form',
  imports: [LucideAngularModule, ReactiveFormsModule],
  templateUrl: './requests-form.component.html',
  styles: ``,
})
export class RequestsFormComponent {
  readonly PlusIcon = Plus;
  readonly DeleteIcon = Trash2;

  requests: Array<Request> = [];

  requestsForm = new FormGroup({
    reqName: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    reqType: new FormControl<ReqType>('GET', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    reqUrl: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  saveRequest() {
    if (this.requestsForm.valid) {
      console.warn('Form is invalid, please check the inputs.');
      const request: Request = {
        requestName: this.requestsForm.getRawValue().reqName,
        requestType: this.requestsForm.getRawValue().reqType,
        requestUrl: this.requestsForm.getRawValue().reqUrl,
      };
      console.log('Request Saved:', request);
      this.requests.push(request);
      console.log('Current Requests:', this.requests);
      this.requestsForm.reset();
    } else {
      console.warn('Form is invalid, please check the inputs.');
    }
  }

  removeRequest(index: number) {
    this.requests.splice(index, 1);
    console.log('Request Removed at index:', index);
    console.log('Current Requests :', this.requests);
  }
}
