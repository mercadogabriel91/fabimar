type ServiceMediaProps = {
  image: string
  name: string
  large?: boolean
}

export function ServiceMedia({ image, name, large = false }: ServiceMediaProps) {
  const classes = [
    'service-media',
    large ? 'service-media--large' : 'service-media--card',
  ].join(' ')

  return (
    <div className={classes} role="img" aria-label={`Imagen de ${name}`}>
      <img
        className="service-media__image"
        src={image}
        alt=""
        loading={large ? 'eager' : 'lazy'}
        decoding="async"
        onError={(event) => {
          event.currentTarget.classList.add('service-media__image--fallback')
        }}
      />
    </div>
  )
}
