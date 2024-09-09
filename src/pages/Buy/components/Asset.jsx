import { Bitcoin, Building, Gem, ReceiptText, XIcon } from 'lucide-react'
import { formatCurrency, formatDateTime } from '../../../js/format'
import { useCart } from '../../../hooks/useCart'

const TypeToIcon = {
  gem: Gem,
  'real estate': Building,
  crypto: Bitcoin,
  stock: ReceiptText,
}

export const Asset = ({ asset }) => {
  const { dispatch } = useCart()
  const Icon = TypeToIcon[asset.type]

  const removeFromCart = () => {
    dispatch({ type: 'REMOVE', payload: asset })
  }

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
      <div className="flex items-center">
        <span className="mr-8 text-lg font-bold">{formatCurrency(asset.price)}</span>
        <button onClick={removeFromCart} className="text-stone-600">
          <XIcon strokeWidth={1.5} />
        </button>
      </div>
    </div>
  )
}
