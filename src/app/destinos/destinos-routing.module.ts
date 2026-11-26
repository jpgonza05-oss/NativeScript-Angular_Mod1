import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';
import { DestinosListaComponent } from './destinos-lista/destinos-lista.component';

const routes: Routes = [
  { path: '', component: DestinosListaComponent },
  { path: 'detalle/:id', component: DestinoDetalleComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class DestinosRoutingModule {}
