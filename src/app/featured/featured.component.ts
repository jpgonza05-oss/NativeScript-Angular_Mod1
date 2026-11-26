import { Component } from '@angular/core';
import { abrirDrawer } from '../shared/drawer.util';

@Component({
  selector: 'ns-featured',
  templateUrl: './featured.component.html',
})
export class FeaturedComponent {
  onDrawerButtonTap(): void {
    abrirDrawer();
  }
}
