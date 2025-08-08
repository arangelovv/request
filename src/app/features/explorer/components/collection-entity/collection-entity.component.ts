import { Component, input, signal, WritableSignal } from '@angular/core';
import {
  LucideAngularModule,
  ChevronRight,
  ChevronDown,
  Database,
  EllipsisVertical,
  SquareArrowOutUpRight,
} from 'lucide-angular';
import { Request } from '../../../../shared/entities';
import { RequestItemComponent } from '../request-item/request-item.component';

@Component({
  selector: 'app-collection-entity',
  imports: [LucideAngularModule, RequestItemComponent],
  templateUrl: './collection-entity.component.html',
})
export class CollectionEntityComponent {
  readonly ChevronRightIcon = ChevronRight;
  readonly ChevronDownIcon = ChevronDown;
  readonly DatabaseIcon = Database;
  readonly ElipsisIcon = SquareArrowOutUpRight;

  collectionName = input<string>('Collection Name');
  collectionRequests = input<Request[] | undefined>();

  isOpen: WritableSignal<boolean> = signal(false);
}
