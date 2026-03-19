// Centralized sector configuration - single source of truth

export interface SectorInfo {
  name: string
  color: string
  category: string
}

// All available sectors organized by category
export const SECTORS: SectorInfo[] = [
  // Tecnología
  { name: 'Tecnología', color: '#00A3FF', category: 'Tecnología' },
  { name: 'Software', color: '#0088DD', category: 'Tecnología' },
  { name: 'Semiconductores', color: '#00BFFF', category: 'Tecnología' },
  { name: 'Hardware', color: '#4DA6FF', category: 'Tecnología' },
  { name: 'Inteligencia Artificial', color: '#0055CC', category: 'Tecnología' },
  { name: 'Cloud Computing', color: '#3399FF', category: 'Tecnología' },
  { name: 'Ciberseguridad', color: '#0077BB', category: 'Tecnología' },
  { name: 'Videojuegos', color: '#6699FF', category: 'Tecnología' },
  { name: 'Blockchain', color: '#1A75FF', category: 'Tecnología' },
  { name: 'IoT', color: '#2E86C1', category: 'Tecnología' },
  { name: 'Robótica', color: '#5DADE2', category: 'Tecnología' },

  // Salud
  { name: 'Salud', color: '#00FF88', category: 'Salud' },
  { name: 'Farmacéutica', color: '#00CC6A', category: 'Salud' },
  { name: 'Biotecnología', color: '#00E676', category: 'Salud' },
  { name: 'Equipos Médicos', color: '#66FFB2', category: 'Salud' },
  { name: 'Seguros de Salud', color: '#33CC80', category: 'Salud' },
  { name: 'Servicios de Salud', color: '#00B85C', category: 'Salud' },

  // Finanzas
  { name: 'Finanzas', color: '#7B61FF', category: 'Finanzas' },
  { name: 'Banca', color: '#6A4FE0', category: 'Finanzas' },
  { name: 'Seguros', color: '#8B7BFF', category: 'Finanzas' },
  { name: 'Fintech', color: '#9B8BFF', category: 'Finanzas' },
  { name: 'Gestión de Activos', color: '#5B41DF', category: 'Finanzas' },
  { name: 'Servicios Financieros', color: '#A78BFA', category: 'Finanzas' },
  { name: 'Bolsas y Mercados', color: '#7C3AED', category: 'Finanzas' },

  // Consumo
  { name: 'Consumo', color: '#FFB800', category: 'Consumo' },
  { name: 'Consumo Discrecional', color: '#FFC633', category: 'Consumo' },
  { name: 'Consumo Básico', color: '#FFAA00', category: 'Consumo' },
  { name: 'E-commerce', color: '#FFD454', category: 'Consumo' },
  { name: 'Lujo', color: '#CC9200', category: 'Consumo' },
  { name: 'Alimentos y Bebidas', color: '#FF9F1C', category: 'Consumo' },
  { name: 'Retail', color: '#FFCA3A', category: 'Consumo' },
  { name: 'Restaurantes', color: '#E09200', category: 'Consumo' },

  // Energía
  { name: 'Energía', color: '#FF3366', category: 'Energía' },
  { name: 'Petróleo y Gas', color: '#CC2952', category: 'Energía' },
  { name: 'Energías Renovables', color: '#FF5580', category: 'Energía' },
  { name: 'Energía Solar', color: '#FF6699', category: 'Energía' },
  { name: 'Energía Eólica', color: '#FF4477', category: 'Energía' },
  { name: 'Energía Nuclear', color: '#E6294D', category: 'Energía' },

  // Industrial
  { name: 'Industrial', color: '#00D4FF', category: 'Industrial' },
  { name: 'Construcción', color: '#00B8E6', category: 'Industrial' },
  { name: 'Aeroespacial y Defensa', color: '#33DDFF', category: 'Industrial' },
  { name: 'Manufactura', color: '#0099CC', category: 'Industrial' },
  { name: 'Transporte', color: '#66E5FF', category: 'Industrial' },
  { name: 'Logística', color: '#00A3CC', category: 'Industrial' },
  { name: 'Maquinaria', color: '#0080B3', category: 'Industrial' },
  { name: 'Ingeniería', color: '#4DD4F0', category: 'Industrial' },

  // Materiales
  { name: 'Materiales', color: '#FF8C00', category: 'Materiales' },
  { name: 'Minería', color: '#E07B00', category: 'Materiales' },
  { name: 'Químicos', color: '#FFA033', category: 'Materiales' },
  { name: 'Acero y Metales', color: '#CC7000', category: 'Materiales' },
  { name: 'Papel y Celulosa', color: '#FFB44D', category: 'Materiales' },
  { name: 'Oro y Plata', color: '#DAA520', category: 'Materiales' },

  // Inmobiliario
  { name: 'Inmobiliario', color: '#9D4EDD', category: 'Inmobiliario' },
  { name: 'REITs', color: '#8B3DC9', category: 'Inmobiliario' },
  { name: 'Desarrollo Inmobiliario', color: '#B06FE8', category: 'Inmobiliario' },
  { name: 'Infraestructura', color: '#7B2FB5', category: 'Inmobiliario' },

  // Telecomunicaciones y Medios
  { name: 'Telecomunicaciones', color: '#06D6A0', category: 'Comunicaciones' },
  { name: 'Medios y Entretenimiento', color: '#04B888', category: 'Comunicaciones' },
  { name: 'Streaming', color: '#08F0B4', category: 'Comunicaciones' },
  { name: 'Publicidad', color: '#05C494', category: 'Comunicaciones' },
  { name: 'Redes Sociales', color: '#03A87A', category: 'Comunicaciones' },

  // Servicios Públicos
  { name: 'Servicios Públicos', color: '#EF476F', category: 'Servicios Públicos' },
  { name: 'Agua', color: '#D93D63', category: 'Servicios Públicos' },
  { name: 'Gas Natural', color: '#F06B8A', category: 'Servicios Públicos' },
  { name: 'Electricidad', color: '#C43357', category: 'Servicios Públicos' },

  // Automotriz
  { name: 'Automotriz', color: '#F72585', category: 'Automotriz' },
  { name: 'Vehículos Eléctricos', color: '#E01A78', category: 'Automotriz' },
  { name: 'Autopartes', color: '#FF4DA6', category: 'Automotriz' },

  // Otros sectores
  { name: 'Agricultura', color: '#2D6A4F', category: 'Otros' },
  { name: 'Educación', color: '#4895EF', category: 'Otros' },
  { name: 'Viajes y Turismo', color: '#F77F00', category: 'Otros' },
  { name: 'Cannabis', color: '#588157', category: 'Otros' },
  { name: 'Criptomonedas', color: '#F7931A', category: 'Otros' },
  { name: 'Commodities', color: '#B08968', category: 'Otros' },
  { name: 'ETFs', color: '#4361EE', category: 'Otros' },
  { name: 'Fondos', color: '#3A0CA3', category: 'Otros' },
  { name: 'Otros', color: '#8892b0', category: 'Otros' },
]

// Quick lookup: sector name -> color
export const SECTOR_COLORS: Record<string, string> = Object.fromEntries(
  SECTORS.map(s => [s.name, s.color])
)

// Get all unique categories in order
export const SECTOR_CATEGORIES = Array.from(
  new Set(SECTORS.map(s => s.category))
)

// Get sectors grouped by category (for optgroup rendering)
export function getSectorsByCategory(): { category: string; sectors: SectorInfo[] }[] {
  return SECTOR_CATEGORIES.map(category => ({
    category,
    sectors: SECTORS.filter(s => s.category === category),
  }))
}

// Get color for a sector (supports custom sectors)
export function getSectorColor(sectorName: string): string {
  return SECTOR_COLORS[sectorName] || SECTOR_COLORS['Otros']
}

// Get all sector names as a flat list
export const SECTOR_NAMES = SECTORS.map(s => s.name)
