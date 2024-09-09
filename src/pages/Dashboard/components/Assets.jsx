import { useCart } from '../../../hooks/useCart'
import { assets } from '../../../data/assets'
import { Bitcoin, Building, Gem, ReceiptText } from 'lucide-react'
import { formatCurrency, formatDateTime } from '../../../js/format'

const TypeToIcon = {
  gem: Gem,
  'real estate': Building,
  crypto: Bitcoin,
  stock: ReceiptText,
}

export const Assets = () => {
  const { dispatch } = useCart()

  const handleAdd = (asset) => {
    dispatch({ type: 'ADD', payload: asset })
  }

  const handleRemove = (asset) => {
    dispatch({ type: 'REMOVE', payload: asset })
  }

  return (
    <div className="mt-4 flex max-h-[750px] flex-col gap-4 overflow-y-auto">
      {assets.map((asset) => {
        const Icon = TypeToIcon[asset.type]

        return (
          <div className="flex flex-wrap items-center justify-between gap-4 rounded bg-gray-dark px-6 py-4 lg:gap-0">
            <div className="flex items-center gap-8">
              <div className="rounded-lg bg-secondary p-3 text-white">
                <Icon strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-medium">{asset.name}</h3>
                <span className="text-xs text-stone-700">{formatDateTime(asset.createdAt)}</span>
              </div>
            </div>
            <div>
              <span className="mr-8 text-lg font-bold">{formatCurrency(asset.price)}</span>
              <button onClick={() => handleAdd(asset)} className="mr-2 rounded bg-primary px-4 py-2 text-white">
                Adicionar
              </button>
              <button onClick={() => handleRemove(asset)} className="rounded bg-secondary px-4 py-2 text-white">
                Remover
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
