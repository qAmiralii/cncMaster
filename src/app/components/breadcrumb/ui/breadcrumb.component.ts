import { Component, inject, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  imports: [
    MatCard,
  ],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  path: { label: string, icon: string }[] = [];
  // constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  router = inject(Router)
  activatedRoute = inject(ActivatedRoute)

  formatLabel(segment: string): string {
    return segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
  }

  buildBreadcrumbs(segments: string[]): { label: string, icon: string }[] {
    const iconMap: { [key: string]: string } = {
      home: '🏠',
      products: '🛍️',
      tools: '🧰',
      cnc: '🔧',
      electronics: '💻',
      default: '📦'
    };
    return segments.map(segment => ({
      label: this.formatLabel(segment),
      icon: iconMap[segment.toLowerCase()] || iconMap['default']
    }));
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const segments = this.router.url.split('/').filter(Boolean);
        this.path = this.buildBreadcrumbs(segments);
      });
  }

}
