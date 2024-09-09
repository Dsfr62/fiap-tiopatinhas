import { assets } from '../data/assets'
import { Bitcoin, Building, Gem, ReceiptText, XIcon } from 'lucide-react'
import { formatCurrency, formatDateTime } from '../js/format'
import { useState } from 'react'

const TypeToIcon = {
  gem: Gem,
  'real estate': Building,
  crypto: Bitcoin,
  stock: ReceiptText,
}

const SellPage = () => {
  const [data, setData] = useState(assets.slice(0, 6))

  const removeFromCart = (asset) => {
    setData(data.filter((item) => item.id !== asset.id))
    alert('Item removido do carrinho')
  }

  return (
    <div className="container flex min-h-[90vh] flex-col">
      <h1 className="text-[48px] font-extrabold">Vender</h1>
      <>
        <div className="mt-8 flex flex-col gap-4">
          {data.map((asset) => {
            const Icon = TypeToIcon[asset.type]
            return (
              <div key={asset.id} className="flex items-center justify-between rounded bg-gray-dark px-6 py-4">
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
                  <button onClick={() => removeFromCart(asset)} className="text-stone-600">
                    <XIcon strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-auto flex flex-col gap-4">
          <div className="flex items-center justify-between rounded bg-gray-dark px-6 py-4">
            <h3 className="text-lg font-medium">Total</h3>
            <span className="text-lg font-bold">
              {data
                .reduce((acc, asset) => acc + asset.price, 0)
                .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </span>
          </div>
          <button className="rounded bg-primary p-4 text-white">Finalizar venda</button>
        </div>
      </>
    </div>
  )
}

export default SellPage
