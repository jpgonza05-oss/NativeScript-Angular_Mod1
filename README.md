# Destinos HN

App de destinos turísticos de Honduras hecha con NativeScript y Angular, con una versión web que comparte el modelo y el servicio.
Sigue la organización de [template-drawer-navigation-ng](https://github.com/NativeScript/template-drawer-navigation-ng): side drawer y un módulo con su propio ruteo por cada feature.

## Ejecutar

Requisitos: Node.js, NativeScript CLI (`npm i -g nativescript`) y el entorno de Android o iOS (`ns doctor`).

```bash
npm install
ns run android   # móvil Android
ns run ios       # móvil iOS (requiere macOS)
npm run web      # web en http://localhost:4200
```

## Dónde está cada punto

| # | Requisito | Ubicación |
|---|-----------|-----------|
| 1 | Estructura de la plantilla drawer, ruteo modularizado | `src/app/app.component.*`, `src/app/app-routing.module.ts`, `*-routing.module.ts` |
| 2 | Componentes nuevos (3) | `DestinosListaComponent`, `DestinoCardComponent`, `DestinoDetalleComponent` |
| 3 | Módulo nuevo | `src/app/destinos/destinos.module.ts` |
| 4 | Submódulo de ruteo | `src/app/destinos/destinos-routing.module.ts` |
| 5 | Integración al side drawer | opción "Destinos" en `src/app/app.component.html` |
| 6 | Servicio global inyectado | `src/app/core/destinos.service.ts` (`providedIn: 'root'`) |
| 7 | `*ngFor` | `destinos-lista.component.html` |
| 8 | CSS por plataforma | `src/app.android.css` y `src/app.ios.css` |
| 9 | Ícono personalizado | `ic_destino.png` en `App_Resources/Android/src/main/res/drawable-*` y `App_Resources/iOS/Assets.xcassets` |
| 10 | Asignación solo en Android | `ngOnInit` de `destinos-lista.component.ts` |

## Conceptos aplicados

- **Lazy loading:** el ruteo raíz carga cada módulo con `loadChildren`; `destinos` usa `forChild` para la lista y el detalle (`detalle/:id`).
- **Inyección de dependencias:** el drawer y las vistas de Destinos reciben la misma instancia del servicio, así el contador de favoritos del menú refleja los cambios. Los datos viven en memoria y se reinician al cerrar la app.
- **Comunicación entre componentes:** la lista envía datos a la tarjeta con `@Input` y recibe eventos con `@Output`.
- **Móvil y web:** `src/` es la app NativeScript y `web/` la app de navegador. Cada una tiene sus vistas y ambas usan `src/app/core`.
