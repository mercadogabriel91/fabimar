export type PurposeContent = {
  eyebrow: string
  title: string
  manifesto: string
  paragraphs: string[]
  humanAwakening: {
    label: string
    body: string
  }
  paths: {
    products: { label: string; description: string }
    services: { label: string; description: string }
  }
}

export const purpose: PurposeContent = {
  eyebrow: 'Proposito Fabimar',
  title: 'Movemos materia. Despertamos conciencia.',
  manifesto: 'Elegir bien tambien es una forma de conciencia.',
  paragraphs: [
    'Fabimar existe para acompanar decisiones concretas: que equipar, como mover, con quien confiar. Productos y servicios comparten el mismo estandar: criterio, claridad y seguimiento humano.',
    'Esta vidriera digital es una invitacion a explorar con calma. Cuando algo encaja, la conversacion continua por WhatsApp con un asesor que entiende el contexto.',
  ],
  humanAwakening: {
    label: 'Human Awakening',
    body: 'Es la referencia que orienta nuestro trato: toda operacion termina en personas. No es un discurso aparte ni una promesa mistica, es el recordatorio de hablar claro, escuchar y responder con responsabilidad.',
  },
  paths: {
    products: {
      label: 'Productos',
      description: 'Curados por calidad, diseno y confianza.',
    },
    services: {
      label: 'Servicios',
      description: 'Movimiento, precision y compromiso.',
    },
  },
}
