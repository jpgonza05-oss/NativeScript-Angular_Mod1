import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';

import { Destino } from '../../core/destino.model';
import { DestinosService } from '../../core/destinos.service';

@Component({
  selector: 'ns-destino-detalle',
  templateUrl: './destino-detalle.component.html',
})
export class DestinoDetalleComponent implements OnInit {
  destino?: Destino;

  constructor(
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private destinosService: DestinosService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.destino = this.destinosService.getDestino(id);
  }

  onFavorito(): void {
    if (this.destino) {
      this.destinosService.toggleFavorito(this.destino.id);
    }
  }

  onVolver(): void {
    this.routerExtensions.back();
  }
}
