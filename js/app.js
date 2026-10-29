/**
 * Suramerica 2030 - Aplicación Principal (Orquestador)
 * 
 * Inicializa todos los módulos cuando el DOM está completamente cargado.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar navegación y efectos UI
    if (window.SuramericaNavigation) {
        window.SuramericaNavigation.init();
    }

    // 2. Renderizar catálogo de rutas y tarifas
    if (window.SuramericaRoutes) {
        window.SuramericaRoutes.init();
    }

    // 3. Renderizar catálogo de servicios
    if (window.SuramericaServices) {
        window.SuramericaServices.init();
    }

    // 4. Renderizar directorio de oficinas
    if (window.SuramericaOffices) {
        window.SuramericaOffices.init();
    }

    // 5. Inicializar formulario de cotizaciones
    if (window.SuramericaQuoter) {
        window.SuramericaQuoter.init();
    }

    console.log('✅ Suramerica 2030: Módulos inicializados correctamente.');
});
