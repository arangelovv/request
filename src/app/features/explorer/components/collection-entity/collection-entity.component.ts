import { Component, input, Input, signal, WritableSignal } from '@angular/core';
import {
  LucideAngularModule,
  ChevronRight,
  ChevronDown,
  Database,
  EllipsisVertical,
} from 'lucide-angular';
import { Request } from '../../../../shared/entities';

@Component({
  selector: 'app-collection-entity',
  imports: [LucideAngularModule],
  templateUrl: './collection-entity.component.html',
})
export class CollectionEntityComponent {
  readonly ChevronRightIcon = ChevronRight;
  readonly ChevronDownIcon = ChevronDown;
  readonly DatabaseIcon = Database;
  readonly ElipsisIcon = EllipsisVertical;

  collectionName = input<string>('Collection Name');
  collectionRequests = input<Request[] | undefined>();

  isOpen: WritableSignal<boolean> = signal(false);
}
