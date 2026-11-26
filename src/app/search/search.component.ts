import { Component } from '@angular/core';
import { abrirDrawer } from '../shared/drawer.util';

@Component({
  selector: 'ns-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  onDrawerButtonTap(): void {
    abrirDrawer();
  }
}
