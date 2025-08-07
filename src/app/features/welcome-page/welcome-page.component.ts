import { Component } from '@angular/core';
import {
  LucideAngularModule,
  Zap,
  Database,
  ArrowUpDown,
  Briefcase,
  Plus,
} from 'lucide-angular';

@Component({
  selector: 'app-welcome-page',
  imports: [LucideAngularModule],
  templateUrl: './welcome-page.component.html',
  styles: ``,
})
export class WelcomePageComponent {
  readonly ZapIcon = Zap;
  readonly DatabaseIcon = Database;
  readonly ArrowsIcon = ArrowUpDown;
  readonly BriefcaseIcon = Briefcase;
  readonly PlusIcon = Plus;
}
