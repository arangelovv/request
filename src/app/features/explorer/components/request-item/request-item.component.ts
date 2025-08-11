import { Component, input, OnInit } from '@angular/core';
import { ReqType } from '../../../../shared/entities';

@Component({
  selector: 'app-request-item',
  imports: [],
  templateUrl: './request-item.component.html',
  styles: ``,
})
export class RequestItemComponent implements OnInit {
  readonly requestName = input<string | undefined>(undefined);
  readonly requestType = input<ReqType | undefined>(undefined);

  protected requestTypeStyle: string | undefined = undefined;

  ngOnInit(): void {
    switch (this.requestType()) {
      case 'GET':
        this.requestTypeStyle = 'bg-emerald-300';
        break;
      case 'PUT':
        this.requestTypeStyle = 'bg-yellow-300';
        break;
      case 'POST':
        this.requestTypeStyle = 'bg-blue-300';
        break;
      case 'DELETE':
        this.requestTypeStyle = 'bg-red-300';
        break;
      case 'PATCH':
        this.requestTypeStyle = 'bg-orange-300';
        break;
      default:
        this.requestTypeStyle = 'bg-gray-300';
    }
    console.warn(this.requestTypeStyle);
  }
}
