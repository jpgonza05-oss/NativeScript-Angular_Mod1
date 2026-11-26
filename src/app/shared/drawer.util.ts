import { Application } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

export function abrirDrawer(): void {
  (Application.getRootView() as unknown as RadSideDrawer).showDrawer();
}
