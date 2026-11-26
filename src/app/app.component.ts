import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { Application } from '@nativescript/core';
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';
import { filter } from 'rxjs/operators';

import { DestinosService } from './core/destinos.service';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  sideDrawerTransition: DrawerTransitionBase = new SlideInOnTopTransition();
  private activatedUrl = '/home';

  constructor(
    private router: Router,
    private routerExtensions: RouterExtensions,
    // Misma instancia que usa el módulo Destinos.
    public destinosService: DestinosService
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => (this.activatedUrl = event.urlAfterRedirects));
  }

  isSelected(url: string): boolean {
    return this.activatedUrl === url || this.activatedUrl.startsWith(url + '/');
  }

  onNavItemTap(url: string): void {
    this.routerExtensions.navigate([url], { transition: { name: 'fade' }, clearHistory: true });
    const sideDrawer = Application.getRootView() as unknown as RadSideDrawer;
    sideDrawer.closeDrawer();
  }
}
