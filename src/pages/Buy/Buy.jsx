import { Frown } from 'lucide-react'
import { useCart } from '../../hooks/useCart'
import { Asset } from './components/Asset'

const BuyPage = () => {
  const { cart } = useCart()

  return (
    <div className="flex min-h-[90vh] w-full flex-col md:container">
      <h1 className="text-[48px] font-extrabold">Comprar</h1>
      {cart.length ? (
        <>
          <div className="mt-8 flex flex-wrap gap-4 lg:flex-col">
            {cart.map((asset) => (
              <Asset key={asset.id} asset={asset} />
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-4">
            <div className="flex items-center justify-between rounded bg-gray-dark px-6 py-4">
              <h3 className="text-lg font-medium">Total</h3>
              <span className="text-lg font-bold">
                {cart
                  .reduce((acc, asset) => acc + asset.price, 0)
                  .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
              </span>
            </div>
            <button className="rounded bg-primary p-4 text-white">Finalizar compra</button>
          </div>
        </>
      ) : (
        <div className="mt-8 flex min-h-96 flex-col items-center justify-center gap-4">
          <Frown className="text-primary" size={72} />
          <p className="text-2xl text-stone-500">Nenhum ativo no carrinho</p>
        </div>
      )}
    </div>
  )
}

export default BuyPage
