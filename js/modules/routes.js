/**
 * Suramerica 2030 - Módulo de Rutas y Tarifas
 * 
 * Renderiza dinámicamente las tarjetas de rutas a partir de los datos maestros
 * y gestiona los enlaces de reserva directa a WhatsApp.
 */

const SuramericaRoutes = {
    init: function () {
        const ecuadorContainer = document.getElementById('salidas-ecuador-cards');
        const venezuelaContainer = document.getElementById('salidas-venezuela-cards');

        if (ecuadorContainer && window.SuramericaData?.routes?.ecuador) {
            this.renderTab(ecuadorContainer, window.SuramericaData.routes.ecuador.cards, 'col-md-6 col-lg-4');
        }

        if (venezuelaContainer && window.SuramericaData?.routes?.venezuela) {
            this.renderTab(venezuelaContainer, window.SuramericaData.routes.venezuela.cards, 'col-md-6 col-lg-5');
        }
    },

    /**
     * Genera las tarjetas HTML para una pestaña específica
     */
    renderTab: function (container, cards, colClass) {
        container.innerHTML = cards.map(card => this.createCardHTML(card, colClass)).join('');
    },

    /**
     * Construye el markup de una tarjeta de ruta individual
     */
    createCardHTML: function (card, colClass) {
        const highlightClass = card.isHighlighted ? 'highlight-card' : '';
        const whatsappUrl = `https://wa.me/${card.phone}?text=${encodeURIComponent(card.whatsappText)}`;

        const featuresHTML = card.features.map(feat => `
            <li>
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span>${feat}</span>
            </li>
        `).join('');

        return `
            <div class="${colClass}">
                <div class="card route-card h-100 p-4 ${highlightClass}">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <div>
                            <span class="badge ${card.badgeClass} mb-1">${card.countryBadge}</span>
                            <h4 class="fw-bold mb-0">${card.destination}</h4>
                        </div>
                        <div class="price-tag">${card.currency}${card.price}</div>
                    </div>
                    <hr class="my-3">
                    <ul class="list-unstyled feature-list mb-4">
                        ${featuresHTML}
                    </ul>
                    <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" 
                       class="btn ${card.btnClass} w-100 fw-bold mt-auto py-2">
                        ${card.btnText}
                    </a>
                </div>
            </div>
        `;
    }
};

// Global y export
if (typeof window !== 'undefined') {
    window.SuramericaRoutes = SuramericaRoutes;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SuramericaRoutes;
}
