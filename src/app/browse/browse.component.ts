import { Component } from '@angular/core';
import { abrirDrawer } from '../shared/drawer.util';

@Component({
  selector: 'ns-browse',
  templateUrl: './browse.component.html',
})
export class BrowseComponent {
  onDrawerButtonTap(): void {
    abrirDrawer();
  }
}
