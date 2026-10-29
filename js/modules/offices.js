/**
 * Suramerica 2030 - Módulo de Oficinas y Contactos
 * 
 * Renderiza el directorio de sucursales en Ecuador y Venezuela con enlaces
 * directos de llamada y WhatsApp.
 */

const SuramericaOffices = {
    init: function () {
        const ecuadorContainer = document.getElementById('officesEcuadorContainer');
        const venezuelaContainer = document.getElementById('officesVenezuelaContainer');

        if (ecuadorContainer && window.SuramericaData?.offices?.ecuador) {
            this.renderOfficeCard(ecuadorContainer, window.SuramericaData.offices.ecuador);
        }

        if (venezuelaContainer && window.SuramericaData?.offices?.venezuela) {
            this.renderOfficeCard(venezuelaContainer, window.SuramericaData.offices.venezuela);
        }
    },

    renderOfficeCard: function (container, officeData) {
        const locationsHTML = officeData.locations.map(loc => `
            <div class="office-item">
                <h6 class="mb-1">
                    <i class="bi bi-geo-alt-fill text-danger me-1"></i>
                    ${loc.city}
                </h6>
                <p class="mb-0">${loc.address}</p>
            </div>
        `).join('');

        // Las líneas directas de WhatsApp se encuentran deshabilitadas por el momento
        const phonesBoxHTML = (officeData.showPhones && officeData.phones?.length) ? `
            <div class="office-phones-box mt-3">
                <span class="small fw-bold d-block mb-2 text-dark">
                    📱 Líneas directas de WhatsApp:
                </span>
                <div class="d-flex flex-wrap gap-2">
                    ${officeData.phones.map(phone => `
                        <a href="https://wa.me/${phone.number}" target="_blank" rel="noopener noreferrer" 
                           class="btn-whatsapp-phone">
                            <i class="bi bi-whatsapp"></i>
                            <span>${phone.display}</span>
                        </a>
                    `).join('')}
                </div>
            </div>
        ` : '';

        container.innerHTML = `
            <div class="office-card">
                <div class="office-card-header">
                    <h5>${officeData.headerTitle}</h5>
                </div>
                <div class="card-body p-4">
                    ${locationsHTML}
                    ${phonesBoxHTML}
                </div>
            </div>
        `;
    }
};

// Global y export
if (typeof window !== 'undefined') {
    window.SuramericaOffices = SuramericaOffices;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SuramericaOffices;
}
