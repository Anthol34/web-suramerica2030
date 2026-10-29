/**
 * Suramerica 2030 - Módulo de Servicios
 * 
 * Renderiza dinámicamente los servicios ofrecidos por la agencia.
 */

const SuramericaServices = {
    init: function () {
        const container = document.getElementById('servicesContainer');
        if (!container || !window.SuramericaData?.services) return;

        this.renderServices(container, window.SuramericaData.services);
    },

    renderServices: function (container, services) {
        container.innerHTML = services.map(service => `
            <div class="col-md-4">
                <div class="service-card">
                    <div class="service-icon-box">
                        <i class="bi ${service.icon}"></i>
                    </div>
                    <h4 class="fw-bold">${service.title}</h4>
                    <p class="mb-0">${service.description}</p>
                </div>
            </div>
        `).join('');
    }
};

// Global y export
if (typeof window !== 'undefined') {
    window.SuramericaServices = SuramericaServices;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SuramericaServices;
}
