import { Component } from '@angular/core';
import { abrirDrawer } from '../shared/drawer.util';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  onDrawerButtonTap(): void {
    abrirDrawer();
  }
}
