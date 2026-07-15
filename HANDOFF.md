# Finanzas PITI — Handoff para próximo agente

## Proyecto
App web Finanzas PITI para control de gastos/ingresos personales.
Ubicación: `C:\Users\Piedad Correa.DESKTOP-JB3G46D\Desktop\Piti\`

## Archivos principales
| Archivo | Descripción |
|---|---|
| `finanzas2026.html` | App completa (1313 líneas, HTML+CSS+JS inline) |
| `index.html` | Copia idéntica de finanzas2026.html |
| `serve.js` | Servidor Node.js para acceso desde iPhone |
| `manifest.json` | PWA manifest (standalone, portrait) |
| `importar_finanzas.json` | Datos de respaldo para importar |
| `finanzas2026_backup.html` | Backup anterior a los cambios mobile |

## Git
- Branch: `main`
- Último commit: `5f2f081` — "Servidor Node.js para acceso local desde iPhone"
- Va 5 commits ahead de origin/main
- Todos los archivos relevantes están commiteados
- No hay cambios sin commit

## Funcionalidades implementadas
1. **Registro de ingresos/gastos** — monto, categoría, descripción, fecha
2. **Balance mensual** — resumen de ingresos vs gastos
3. **Gráfico donut** — distribución de gastos por categoría
4. **Top gastos** — tabla de gastos ordenados por monto
5. **Movimientos** — historial completo con scroll infinito
6. **Proyección** — estimación de gastos futuros
7. **Importar/Exportar datos** — respaldo JSON
8. **Firebase** — configurado como backend (no tocar)

## Diseño mobile (últimos cambios)
- Base font-size: 15px (14px en <480px)
- Bottom nav: 3 tabs (Inicio, Panel, Más) — cada uno 33% de ancho
- FAB: botón "+" verde de 56px, bottom-right, siempre visible
- Bottom sheet "Más": Resumen, Planificación, Proyección, Movimientos, Config, Datos
- Header compacto: moneda, total, balance — todo en 1 línea
- Métricas: 2 columnas, tarjetas compactas con fuente pequeña
- Tablas densas con font-size 0.65rem
- Inputs 44px altura, 16px font-size (evita zoom iOS)
- Safe area para notch iPhone
- Transiciones suaves entre tabs
- Modo lista en Movimientos en <768px

## Cómo correr en local
```bash
node serve.js
```
Luego en el navegador: `http://localhost:8000`
Para iPhone en la misma WiFi: `http://192.168.1.180:8000/finanzas2026.html`

## Importante
- El servidor sirve desde el directorio del proyecto
- Por defecto redirige `/` a `/finanzas2026.html`
- Puerto 8000, bind a 0.0.0.0 (accesible desde LAN)
- Si se cierra la terminal, el servidor se detiene

## Cosas pendientes/ideas
- [ ] Convertir a PWA instalable (service worker, manifest ya está)
- [ ] Agregar base de datos local (IndexedDB) para modo offline
- [ ] Push notifications para recordatorios de gastos
- [ ] Mejorar la experiencia de registro de gastos recurrentes
- [ ] Agregar categorías personalizadas
- [ ] Sincronización entre dispositivos
- [ ] Modo oscuro
