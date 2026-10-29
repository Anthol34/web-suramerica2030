/**
 * Suramerica 2030 - Módulo de Navegación e Interacción UI
 * 
 * Gestiona el efecto de scroll en el navbar, el cierre automático del menú
 * móvil al hacer clic y la navegación suave entre secciones.
 */

const SuramericaNavigation = {
    init: function () {
        this.setupScrollNavbar();
        this.setupMobileMenuAutoClose();
    },

    /**
     * Añade clase al navbar cuando se hace scroll hacia abajo
     */
    setupScrollNavbar: function () {
        const navbar = document.querySelector('.navbar-custom');
        if (!navbar) return;

        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    },

    /**
     * Cierra el menú hamburguesa al pulsar sobre cualquier enlace en móviles
     */
    setupMobileMenuAutoClose: function () {
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)');
        const navbarCollapse = document.getElementById('menuNavegacion');

        if (!navbarCollapse) return;

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                }
            });
        });
    }
};

// Global y export
if (typeof window !== 'undefined') {
    window.SuramericaNavigation = SuramericaNavigation;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SuramericaNavigation;
}
