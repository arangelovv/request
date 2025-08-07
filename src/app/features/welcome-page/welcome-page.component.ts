import { Component } from '@angular/core';
import {
  LucideAngularModule,
  Zap,
  Database,
  ArrowUpDown,
  Briefcase,
  Plus,
} from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  imports: [LucideAngularModule, RouterLink],
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
