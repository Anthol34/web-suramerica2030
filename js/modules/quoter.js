/**
 * Suramerica 2030 - Módulo Cotizador
 * 
 * Gestiona el formulario de cotización rápida y genera el enlace directo
 * formateado para iniciar la conversación en WhatsApp.
 */

const SuramericaQuoter = {
    init: function () {
        const form = document.getElementById('quoterForm');
        if (!form) return;

        this.setupDateConstraint();
        form.addEventListener('submit', this.handleSubmit.bind(this));
    },

    /**
     * Asegura que la fecha mínima no sea anterior a hoy
     */
    setupDateConstraint: function () {
        const dateInput = document.getElementById('cot_fecha');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.min = today;
        }
    },

    /**
     * Procesa la cotización y redirige a WhatsApp
     */
    handleSubmit: function (event) {
        event.preventDefault();

        const servicioEl = document.getElementById('cot_servicio');
        const origenEl = document.getElementById('cot_origen');
        const destinoEl = document.getElementById('cot_destino');
        const fechaEl = document.getElementById('cot_fecha');
        const cantidadEl = document.getElementById('cot_cantidad');
        const lineaEl = document.getElementById('cot_linea');

        const servicio = servicioEl ? servicioEl.value : 'Información General';
        const origen = origenEl ? origenEl.value : 'No especificado';
        const destino = destinoEl ? destinoEl.value : 'No especificado';
        const fecha = (fechaEl && fechaEl.value) ? fechaEl.value : 'Por definir (Fecha Abierta)';
        const cantidad = cantidadEl ? cantidadEl.value : '1';
        const telefono = (lineaEl && lineaEl.value) ? lineaEl.value : '593967049757';

        const mensaje =
            `Hola *Suramerica 2030*, deseo cotizar el siguiente servicio:\n\n` +
            `📌 *Servicio:* ${servicio}\n` +
            `🛫 *Origen:* ${origen}\n` +
            `🛬 *Destino:* ${destino}\n` +
            `📅 *Fecha:* ${fecha}\n` +
            `👥 *Cantidad:* ${cantidad}\n\n` +
            `¿Me pueden ayudar con la disponibilidad y requisitos?`;

        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    }
};

// Global y export
if (typeof window !== 'undefined') {
    window.SuramericaQuoter = SuramericaQuoter;
    // Compatibilidad retroactiva por si se invoca inline en HTML
    window.enviarCotizacionWhatsApp = function(event) {
        SuramericaQuoter.handleSubmit(event);
    };
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SuramericaQuoter;
}
