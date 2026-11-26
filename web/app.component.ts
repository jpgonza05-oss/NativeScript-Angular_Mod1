import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DestinosService } from '../src/app/core/destinos.service';

@Component({
  selector: 'web-root',
  standalone: true,
  imports: [NgFor],
  template: `
    <h1>Destinos HN (web)</h1>
    <p>Favoritos: {{ service.totalFavoritos }}</p>
    <ul>
      <li *ngFor="let d of service.getDestinos()">
        <div><strong>{{ d.nombre }}</strong><br />{{ d.departamento }}</div>
        <button type="button" (click)="service.toggleFavorito(d.id)">{{ d.favorito ? '★' : '☆' }}</button>
      </li>
    </ul>
  `,
})
export class WebAppComponent {
  service = inject(DestinosService);
}
