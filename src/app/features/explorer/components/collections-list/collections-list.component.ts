import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CollectionEntityComponent } from '../collection-entity/collection-entity.component';
import { LucideAngularModule, Plus } from 'lucide-angular';
import { Collection, exampleEntities } from '../../../../shared/entities';

@Component({
  selector: 'app-collections-list',
  imports: [CollectionEntityComponent, LucideAngularModule, RouterLink],
  templateUrl: './collections-list.component.html',
  styles: ``,
})
export class CollectionsListComponent {
  readonly PlusIcon = Plus;

  entities: Collection[] = exampleEntities;
}
