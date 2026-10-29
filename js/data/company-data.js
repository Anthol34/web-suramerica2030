/**
 * Suramerica 2030 - Configuración y Datos Maestros
 * 
 * Este archivo centraliza la información comercial: tarifas, rutas,
 * oficinas y números de contacto, facilitando actualizaciones sin tocar el HTML.
 */

const SuramericaData = {
    company: {
        name: "Suramerica 2030 Internacional",
        legalName: "SURAMERICA 2030 S.A. — Agencia de Viajes Internacional",
        ruc: "3050310204001",
        facebook: "SURAMERICA 2030",
        defaultPhone: "593967049757",
        defaultWhatsappText: "Hola Suramerica 2030, deseo cotizar un pasaje o encomienda",
        luggagePolicyWhatsappText: "Hola, tengo una consulta sobre el peso de mi equipaje"
    },

    // Líneas telefónicas disponibles para cotización y contacto
    phoneLines: [
        { id: "ecuador-central", number: "593967049757", label: "🇪🇨 Central Ecuador (0967049757)", display: "0967049757", country: "EC" }
    ],

    // Opciones del cotizador rápido
    quoterOptions: {
        services: [
            { id: "pasaje", label: "🎫 Compra / Reserva de Pasaje", value: "Pasaje Internacional" },
            { id: "encomienda", label: "📦 Envío de Encomienda / Paquetería", value: "Envío de Encomienda" },
            { id: "valores", label: "💸 Envío de Valores (Dinero)", value: "Envío de Valores / Remesa" }
        ],
        origins: [
            { label: "🇪🇨 Manta", value: "Manta" },
            { label: "🇪🇨 Portoviejo", value: "Portoviejo" },
            { label: "🇪🇨 Guayaquil", value: "Guayaquil" },
            { label: "🇪🇨 Quito", value: "Quito" },
            { label: "🇻🇪 Caracas", value: "Caracas" },
            { label: "🇻🇪 Maracay", value: "Maracay" },
            { label: "🇻🇪 Valencia", value: "Valencia" },
            { label: "🇻🇪 San Cristóbal", value: "San Cristóbal" },
            { label: "🇨🇴 Cúcuta", value: "Cúcuta" }
        ],
        destinations: [
            { label: "🇻🇪 Caracas", value: "Caracas" },
            { label: "🇻🇪 Maracay", value: "Maracay" },
            { label: "🇻🇪 Valencia", value: "Valencia" },
            { label: "🇻🇪 San Cristóbal", value: "San Cristóbal" },
            { label: "🇨🇴 Cúcuta", value: "Cúcuta" },
            { label: "🇪🇨 Manta", value: "Manta" },
            { label: "🇪🇨 Portoviejo", value: "Portoviejo" },
            { label: "🇪🇨 Guayaquil", value: "Guayaquil" },
            { label: "🇪🇨 Quito", value: "Quito" }
        ]
    },

    // Catálogo de Rutas Oficiales
    routes: {
        ecuador: {
            title: "Salidas desde Ecuador",
            tabLabel: "🇪🇨 Salidas desde Ecuador",
            originDescription: "Embarques desde: <strong>Manta, Portoviejo, Guayaquil y Quito</strong> (con conexión por Puente Internacional Rumichaca)",
            cards: [
                {
                    id: "cucuta-from-ecuador",
                    destination: "Cúcuta",
                    countryBadge: "Colombia",
                    badgeClass: "bg-primary-subtle text-primary",
                    price: 140,
                    currency: "$",
                    isHighlighted: false,
                    btnText: "Reservar a Cúcuta",
                    btnClass: "btn-outline-primary",
                    phone: "593967049757",
                    whatsappText: "Hola, deseo reservar pasaje desde Ecuador hacia Cúcuta ($140)",
                    features: [
                        "Transbordo coordinado Tulcán / Ipiales",
                        "1 Maleta de 25 Kg + 10 Kg de mano",
                        "Opción de reserva con abono"
                    ]
                },
                {
                    id: "san-cristobal-from-ecuador",
                    destination: "San Cristóbal",
                    countryBadge: "Venezuela (Frontera)",
                    badgeClass: "bg-warning-subtle text-dark",
                    price: 160,
                    currency: "$",
                    isHighlighted: false,
                    btnText: "Reservar a San Cristóbal",
                    btnClass: "btn-outline-primary",
                    phone: "593967049757",
                    whatsappText: "Hola, deseo reservar pasaje desde Ecuador hacia San Cristóbal ($160)",
                    features: [
                        "Cruces Tulcán/Ipiales y Cúcuta/San Antonio",
                        "1 Maleta de 25 Kg + 10 Kg de mano",
                        "Acompañamiento logístico en frontera"
                    ]
                },
                {
                    id: "venezuela-full-from-ecuador",
                    destination: "Valencia • Maracay • Caracas",
                    countryBadge: "Ruta Completa Venezuela",
                    badgeClass: "bg-danger text-white",
                    price: 200,
                    currency: "$",
                    isHighlighted: true,
                    btnText: "Reservar Ruta Completa",
                    btnClass: "btn-danger",
                    phone: "593967049757",
                    whatsappText: "Hola, deseo reservar pasaje desde Ecuador hacia Venezuela (Caracas/Maracay/Valencia $200)",
                    features: [
                        "Itinerario completo por tramos conectados",
                        "1 Maleta de 25 Kg + 10 Kg de mano",
                        "Boleto con QR de autenticidad y asiento"
                    ]
                }
            ]
        },
        venezuela: {
            title: "Salidas desde Venezuela",
            tabLabel: "🇻🇪 Salidas desde Venezuela",
            originDescription: "Embarques desde: <strong>Caracas (San Martín), Maracay, Valencia y San Cristóbal</strong>",
            cards: [
                {
                    id: "cucuta-from-venezuela",
                    destination: "Hacia Cúcuta",
                    countryBadge: "Conexión Frontera",
                    badgeClass: "bg-primary-subtle text-primary",
                    price: 60,
                    currency: "$",
                    isHighlighted: false,
                    btnText: "Reservar hacia Cúcuta",
                    btnClass: "btn-outline-primary",
                    phone: "584124102597",
                    whatsappText: "Hola, deseo información para viajar hacia Cúcuta ($60)",
                    features: [
                        "Salidas desde Caracas, Maracay y Valencia",
                        "Llegada directa a frontera colombo-venezolana",
                        "Incluye equipaje de 25 Kg bodega + 10 Kg mano"
                    ]
                },
                {
                    id: "ecuador-from-venezuela",
                    destination: "Quito • Guayaquil • Portoviejo • Manta",
                    countryBadge: "Destino Ecuador",
                    badgeClass: "bg-danger text-white",
                    price: 200,
                    currency: "$",
                    isHighlighted: true,
                    btnText: "Reservar hacia Ecuador",
                    btnClass: "btn-danger",
                    phone: "584124102597",
                    whatsappText: "Hola, deseo reservar pasaje desde Venezuela hacia Ecuador ($200)",
                    features: [
                        "Conexión completa hasta tu ciudad en Ecuador",
                        "1 Maleta de 25 Kg + 10 Kg de mano",
                        "Reserva tu cupo con abono o pago total"
                    ]
                }
            ]
        }
    },

    // Catálogo de Servicios
    services: [
        {
            id: "pasajes",
            icon: "bi-ticket-perforated-fill",
            title: "Venta de Pasajes y Reservas",
            description: "Boletos con asiento asignado o en modalidad de <strong>Fecha Abierta</strong>. Puedes asegurar tu viaje con un abono inicial e ir pagando en cuotas antes de tu fecha de salida."
        },
        {
            id: "encomiendas",
            icon: "bi-box-seam-fill",
            title: "Encomiendas y Paquetería",
            description: "Envía cajas, documentos, medicinas y paquetes entre nuestras sucursales de Ecuador y Venezuela con registro de peso, detalle de contenido y comprobante con código QR."
        },
        {
            id: "valores",
            icon: "bi-cash-coin",
            title: "Envío de Valores y Remesas",
            description: "Transferencia y entrega segura de dinero a tus familiares. Registro verificado con documento de identidad del remitente y destinatario para total respaldo."
        }
    ],

    // Directorio de Sucursales
    offices: {
        ecuador: {
            country: "Ecuador",
            flag: "🇪🇨",
            headerTitle: "🇪🇨 Oficinas en Ecuador",
            showPhones: false, // Desactivado por el momento
            locations: [
                { city: "Manta (Matriz)", address: "Av. 24 y Calle 17" },
                { city: "Portoviejo", address: "Terminal Terrestre de Portoviejo" },
                { city: "Guayaquil", address: "Ciudadela Simón Bolívar" }
            ],
            phones: [
                { number: "593967049757", display: "0967049757" }
            ]
        },
        venezuela: {
            country: "Venezuela",
            flag: "🇻🇪",
            headerTitle: "🇻🇪 Oficinas en Venezuela",
            showPhones: false, // Desactivado por el momento
            locations: [
                { city: "Caracas", address: "Sector San Martín" },
                { city: "Maracay y Valencia", address: "Puntos de embarque y recepción de encomiendas" },
                { city: "San Cristóbal", address: "Oficina de conexión fronteriza" }
            ],
            phones: [
                { number: "584124102597", display: "0412-4102597" }
            ]
        }
    }
};

// Compatibilidad tanto con scripts tradicionales como con módulos ES
if (typeof window !== 'undefined') {
    window.SuramericaData = SuramericaData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SuramericaData;
}
