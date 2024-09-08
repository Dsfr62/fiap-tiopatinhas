import { Bitcoin, Building, Gem, ReceiptText, XIcon } from "lucide-react"
import { formatCurrency, formatDateTime } from "../../../js/format"
import { useCart } from "../../../hooks/useCart"

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
    <div className="flex bg-gray-dark px-6 py-4 rounded justify-between items-center">
    <div className="flex gap-8 items-center">
      <div className="rounded-lg p-3 bg-secondary text-white">
        <Icon strokeWidth={1.5}/>
      </div>
      <div className="flex flex-col">
        <h3 className="font-medium text-lg">{asset.name}</h3>
        <span className="text-xs text-stone-700">{formatDateTime(asset.createdAt)}</span>
      </div>
    </div>
    <div className="flex items-center">
      <span className="font-bold text-lg mr-8">
        {formatCurrency(asset.price)}
      </span>
      <button onClick={removeFromCart} className="text-stone-600">
        <XIcon strokeWidth={1.5} />
      </button>
    </div>
  </div>
  )
}