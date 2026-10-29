# Suramerica 2030 Internacional — Arquitectura Web Modular

Sitio web informativo oficial modularizado para **Suramerica 2030 Internacional** (Agencia de Viajes, Encomiendas y Valores).

---

## 📁 Estructura del Proyecto Modular

El proyecto ha sido completamente desacoplado y organizado bajo una arquitectura **Vanilla Modular**, sin necesidad de compiladores o pasos de build pesados:

```text
web-suramerica2030/
│
├── index.html                  # Documento principal orquestador
├── logo.jpg                    # Logotipo oficial
├── package.json                # Scripts para pruebas locales
├── README.md                   # Documentación técnica y de mantenimiento
│
├── css/                        # Arquitectura de estilos modular
│   ├── variables.css           # Tokens de diseño (paleta oficial, tipografía, sombras)
│   ├── base.css                # Estilos base, reset y jerarquía tipográfica
│   ├── navbar.css              # Barra de navegación, efectos de blur y sticky
│   ├── hero.css                # Sección de bienvenida y tarjeta del cotizador
│   ├── routes.css              # Pestañas y tarjetas interactivas de tarifas y rutas
│   ├── services.css            # Tarjetas de soluciones integrales y microinteracciones
│   ├── baggage.css             # Banner oficial de política de equipaje (35 KG)
│   ├── offices.css             # Directorio de sucursales en Ecuador y Venezuela
│   ├── footer.css              # Pie de página institucional y enlace al sistema
│   ├── whatsapp-float.css      # Botón flotante animado de WhatsApp
│   └── styles.css              # Hoja maestra que unifica todos los módulos CSS
│
├── js/                         # Lógica desacoplada en módulos
│   ├── data/
│   │   └── company-data.js     # Datos centralizados: tarifas, teléfonos, rutas y oficinas
│   ├── modules/
│   │   ├── navigation.js       # Blur en scroll y cierre automático del menú móvil
│   │   ├── routes.js           # Renderizador dinámico del catálogo de rutas
│   │   ├── services.js         # Renderizador de tarjetas de servicios
│   │   ├── offices.js          # Renderizador de sucursales y botones de WhatsApp
│   │   └── quoter.js           # Procesamiento de cotización y mensaje de WhatsApp
│   └── app.js                  # Orquestador que inicializa todos los módulos
│
└── components/                 # Fragmentos HTML limpios para referencia o backend (PHP/SSR)
    ├── navbar.html
    ├── hero-quoter.html
    ├── routes.html
    ├── services.html
    ├── baggage.html
    ├── offices.html
    ├── footer.html
    └── whatsapp-float.html
```

---

## 🚀 Cómo Ejecutar el Proyecto

### Opción 1: Directo en el navegador (Sin servidor)
Puedes abrir el archivo `index.html` haciendo doble clic en él o arrastrándolo a cualquier navegador web (Chrome, Edge, Firefox, Safari).

### Opción 2: Servidor local ligero
Si deseas probarlo mediante un servidor HTTP local:
```bash
npm start
```
Luego abre tu navegador en `http://localhost:3000`.

---

## 🛠️ Guía de Mantenimiento Rápido

### ¿Cómo cambiar una tarifa o agregar una ruta?
No necesitas editar el archivo `index.html`. Simplemente abre:
`js/data/company-data.js` -> sección `routes`:
```javascript
{
    id: "cucuta-from-ecuador",
    destination: "Cúcuta",
    price: 130, // Cambia el precio aquí
    whatsappText: "Hola, deseo reservar pasaje..."
}
```

### ¿Cómo actualizar números telefónicos o sucursales?
En `js/data/company-data.js` encontrarás `phoneLines` y `offices` para editar en un solo lugar cualquier número o dirección.

### ¿Cómo modificar los colores corporativos?
En `css/variables.css` están declaradas todas las variables CSS:
```css
:root {
    --brand-navy: #0b2b56;
    --brand-red: #c8102e;
    --brand-gold: #c59b27;
}
```
Cualquier cambio se reflejará instantáneamente en todo el sitio web.
