import { Component, signal, WritableSignal } from '@angular/core';
import {
  LucideAngularModule,
  ChevronRight,
  ChevronDown,
  Database,
  EllipsisVertical,
} from 'lucide-angular';

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

  isOpen: WritableSignal<boolean> = signal(false);

  setOpenState() {
    this.isOpen.set(!this.isOpen());
    console.warn(this.isOpen());
  }
}
