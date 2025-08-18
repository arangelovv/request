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
        this.requestTypeStyle = 'bg-emerald-100 text-emerald-800';
        break;
      case 'PUT':
        this.requestTypeStyle = 'bg-blue-100 text-blue-800';
        break;
      case 'POST':
        this.requestTypeStyle = 'bg-violet-100 text-violet-800';
        break;
      case 'DELETE':
        this.requestTypeStyle = 'bg-red-100 text-red-800';
        break;
      case 'PATCH':
        this.requestTypeStyle = 'bg-amber-100 text-amber-800';
        break;
      case 'HEAD':
        this.requestTypeStyle = 'bg-cyan-100 text-cyan-800';
        break;
      case 'OPTIONS':
        this.requestTypeStyle = 'bg-gray-200 text-gray-800';
        break;
      default:
        this.requestTypeStyle = 'bg-gray-300';
    }
    console.warn(this.requestTypeStyle);
  }
}
