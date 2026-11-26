import { Injectable } from '@angular/core';
import { Destino } from './destino.model';

// providedIn: 'root' registra el servicio en el inyector raíz (una sola instancia).
// No importa nada de NativeScript, por eso lo comparten la app móvil y la web.
@Injectable({ providedIn: 'root' })
export class DestinosService {
  private readonly destinos: Destino[] = [
    { id: 1, nombre: 'Ruinas de Copán', departamento: 'Copán', descripcion: 'Sitio arqueológico maya, famoso por sus estelas y su Escalinata Jeroglífica.', favorito: false },
    { id: 2, nombre: 'Roatán', departamento: 'Islas de la Bahía', descripcion: 'Isla del Caribe conocida por sus playas y sus arrecifes de coral.', favorito: false },
    { id: 3, nombre: 'Lago de Yojoa', departamento: 'Cortés, Comayagua y Santa Bárbara', descripcion: 'Lago rodeado de montañas, ideal para observar aves.', favorito: false },
    { id: 4, nombre: 'Parque Nacional La Tigra', departamento: 'Francisco Morazán', descripcion: 'Bosque nublado con senderos, cerca de Tegucigalpa.', favorito: false },
    { id: 5, nombre: 'Comayagua', departamento: 'Comayagua', descripcion: 'Ciudad colonial con una catedral histórica.', favorito: false },
  ];

  getDestinos(): Destino[] {
    return this.destinos;
  }

  getDestino(id: number): Destino | undefined {
    return this.destinos.find((d) => d.id === id);
  }

  toggleFavorito(id: number): void {
    const destino = this.getDestino(id);
    if (destino) {
      destino.favorito = !destino.favorito;
    }
  }

  get totalFavoritos(): number {
    return this.destinos.filter((d) => d.favorito).length;
  }
}
