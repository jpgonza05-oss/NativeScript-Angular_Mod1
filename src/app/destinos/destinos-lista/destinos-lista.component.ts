import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { isAndroid } from '@nativescript/core';

import { Destino } from '../../core/destino.model';
import { DestinosService } from '../../core/destinos.service';
import { abrirDrawer } from '../../shared/drawer.util';

@Component({
  selector: 'ns-destinos-lista',
  templateUrl: './destinos-lista.component.html',
})
export class DestinosListaComponent implements OnInit {
  destinos: Destino[] = [];
  mensajePlataforma = 'Toca un destino para ver el detalle';

  constructor(private destinosService: DestinosService, private routerExtensions: RouterExtensions) {}

  ngOnInit(): void {
    this.destinos = this.destinosService.getDestinos();

    // Esta asignación se ejecuta SOLO en Android.
    if (isAndroid) {
      this.mensajePlataforma = 'Android: toca un destino y regresa con el botón atrás';
    }
  }

  onVerDetalle(destino: Destino): void {
    this.routerExtensions.navigate(['/destinos/detalle', destino.id], { transition: { name: 'slide' } });
  }

  onFavorito(destino: Destino): void {
    this.destinosService.toggleFavorito(destino.id);
  }

  onDrawerButtonTap(): void {
    abrirDrawer();
  }
}
