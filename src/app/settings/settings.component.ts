import { Component } from '@angular/core';
import { abrirDrawer } from '../shared/drawer.util';

@Component({
  selector: 'ns-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  onDrawerButtonTap(): void {
    abrirDrawer();
  }
}
