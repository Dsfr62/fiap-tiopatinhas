import { useCart } from "../../../hooks/useCart"
import { assets } from "../../../data/assets"
import { Bitcoin, Building, Gem, ReceiptText } from "lucide-react"
import { formatCurrency, formatDateTime } from "../../../js/format"

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
    <div className="max-h-[750px] overflow-y-auto flex flex-col gap-4 mt-4">
      {assets.map((asset) => {
        const Icon = TypeToIcon[asset.type]

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
            <div>
              <span className="font-bold text-lg mr-8">
                {formatCurrency(asset.price)}
              </span>
              <button onClick={() => handleAdd(asset)} className="bg-primary text-white px-4 py-2 rounded mr-2">Adicionar</button>
              <button onClick={() => handleRemove(asset)} className="bg-secondary text-white px-4 py-2 rounded">Remover</button>
            </div>
          </div>
          )
      })}
    </div>
  )
  
}