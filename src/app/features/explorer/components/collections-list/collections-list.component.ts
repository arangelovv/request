import { Component, signal, WritableSignal } from '@angular/core';
import { CollectionEntityComponent } from '../collection-entity/collection-entity.component';
import { LucideAngularModule, Plus } from 'lucide-angular';

@Component({
  selector: 'app-collections-list',
  imports: [CollectionEntityComponent, LucideAngularModule],
  templateUrl: './collections-list.component.html',
  styles: ``,
})
export class CollectionsListComponent {
  readonly PlusIcon = Plus;
}
