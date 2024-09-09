import { assets } from '../data/assets'
import { Bitcoin, Building, Gem, ReceiptText } from 'lucide-react'
import { formatCurrency, formatDateTime } from '../js/format'

const TypeToIcon = {
  gem: Gem,
  'real estate': Building,
  crypto: Bitcoin,
  stock: ReceiptText,
}

const HistoryPage = () => {
  return (
    <div className="container">
      <h1 className="text-[48px] font-extrabold">Histórico</h1>
      <div className="mt-8 flex flex-col gap-4">
        {assets.map((asset) => {
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
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HistoryPage
