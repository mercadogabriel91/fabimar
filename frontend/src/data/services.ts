import { createWhatsAppUrl } from './ctas.ts'
import type { Service } from './types.ts'

export const services: Service[] = [
  {
    id: 'mudanzas',
    name: 'Mudanzas Corporativas y Residenciales',
    highlight: 'Mudanzas',
    summary: 'Traslados cuidados para hogares, equipos y espacios de trabajo.',
    description:
      'Planificacion clara, trato humano y ejecucion ordenada para cada movimiento.',
    benefits: ['Relevamiento previo', 'Equipo coordinado', 'Cuidado de piezas clave'],
    geographicScope: 'Cobertura inicial en AMBA y operaciones a coordinar.',
    image: '/fixtures/services/mudanzas.jpg',
    whatsappUrl: createWhatsAppUrl(
      'Hola Fabimar, quiero solicitar presupuesto por una mudanza.',
    ),
  },
  {
    id: 'distribucion-b2b',
    name: 'Distribucion B2B',
    highlight: 'Distribucion',
    summary: 'Entregas para empresas que necesitan precision y continuidad.',
    description:
      'Operacion sobria para distribuir productos con trazabilidad humana y criterio.',
    benefits: ['Rutas coordinadas', 'Puntos de entrega claros', 'Seguimiento operativo'],
    geographicScope: 'Cobertura segun recorrido comercial y frecuencia requerida.',
    image: '/fixtures/services/distribucion-b2b.jpg',
    whatsappUrl: createWhatsAppUrl(
      'Hola Fabimar, quiero consultar por Distribucion B2B.',
    ),
  },
  {
    id: 'logistica-integral',
    name: 'Logistica Integral',
    highlight: 'Logistica',
    summary: 'Un marco operativo para resolver movimientos complejos.',
    description:
      'Diseno de circuito, coordinacion de recursos y acompanamiento de punta a punta.',
    benefits: ['Plan operativo', 'Coordinacion de proveedores', 'Seguimiento humano'],
    geographicScope: 'Alcance configurable por necesidad y volumen.',
    image: '/fixtures/services/logistica-integral.jpg',
    whatsappUrl: createWhatsAppUrl(
      'Hola Fabimar, quiero consultar por Logistica Integral.',
    ),
  },
  {
    id: 'transporte-especializado',
    name: 'Transporte Especializado',
    highlight: 'Transporte',
    summary: 'Movimiento de piezas que requieren cuidado y criterio tecnico.',
    description:
      'Servicio pensado para objetos, equipos o entregas que no admiten improvisacion.',
    benefits: ['Manipulacion cuidadosa', 'Plan de carga', 'Comunicacion directa'],
    geographicScope: 'Cobertura a definir segun origen, destino y tipo de carga.',
    image: '/fixtures/services/transporte-especializado.jpg',
    whatsappUrl: createWhatsAppUrl(
      'Hola Fabimar, quiero consultar por Transporte Especializado.',
    ),
  },
]

export function getServiceById(serviceId: string): Service | undefined {
  return services.find((service) => service.id === serviceId)
}
