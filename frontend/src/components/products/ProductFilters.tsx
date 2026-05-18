import { brands } from '../../data/brands.ts'
import type { ProductState } from '../../data/types.ts'

export type StateFilter = ProductState | 'all'

type ProductFiltersProps = {
  stateFilter: StateFilter
  brandFilter: string | 'all'
  onStateChange: (value: StateFilter) => void
  onBrandChange: (value: string | 'all') => void
  showBrandFilter?: boolean
}

const stateOptions: { value: StateFilter; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'Nuevo', label: 'Nuevo' },
  { value: 'Usado Seleccionado', label: 'Usado Seleccionado' },
]

export function ProductFilters({
  stateFilter,
  brandFilter,
  onStateChange,
  onBrandChange,
  showBrandFilter = true,
}: ProductFiltersProps) {
  return (
    <div className="showroom-filters" aria-label="Filtros de productos">
      <fieldset className="showroom-filters__group">
        <legend className="eyebrow">Estado</legend>
        <div className="filter-chip-row" role="group" aria-label="Estado del producto">
          {stateOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`filter-chip${stateFilter === option.value ? ' filter-chip--active' : ''}`}
              aria-pressed={stateFilter === option.value}
              onClick={() => onStateChange(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>

      {showBrandFilter ? (
        <fieldset className="showroom-filters__group">
          <legend className="eyebrow">Marca</legend>
          <div className="filter-chip-row" role="group" aria-label="Marca">
            <button
              type="button"
              className={`filter-chip${brandFilter === 'all' ? ' filter-chip--active' : ''}`}
              aria-pressed={brandFilter === 'all'}
              onClick={() => onBrandChange('all')}
            >
              Todas
            </button>
            {brands.map((brand) => (
              <button
                key={brand.id}
                type="button"
                className={`filter-chip${brandFilter === brand.id ? ' filter-chip--active' : ''}`}
                aria-pressed={brandFilter === brand.id}
                onClick={() => onBrandChange(brand.id)}
              >
                {brand.name}
              </button>
            ))}
          </div>
        </fieldset>
      ) : null}
    </div>
  )
}
