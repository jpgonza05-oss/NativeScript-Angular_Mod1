import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Destino } from '../../core/destino.model';

@Component({
  selector: 'ns-destino-card',
  templateUrl: './destino-card.component.html',
})
export class DestinoCardComponent {
  @Input() destino!: Destino;
  @Output() seleccionar = new EventEmitter<void>();
  @Output() favorito = new EventEmitter<void>();
}
