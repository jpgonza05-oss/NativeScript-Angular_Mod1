import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { DestinosRoutingModule } from './destinos-routing.module';
import { DestinoCardComponent } from './destino-card/destino-card.component';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';
import { DestinosListaComponent } from './destinos-lista/destinos-lista.component';

@NgModule({
  imports: [NativeScriptCommonModule, DestinosRoutingModule],
  declarations: [DestinosListaComponent, DestinoCardComponent, DestinoDetalleComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class DestinosModule {}
