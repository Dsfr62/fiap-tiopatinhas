import { Frown } from "lucide-react"
import { useCart } from "../../hooks/useCart"
import { Asset } from "./components/Asset"

const BuyPage = () => {
  const { cart } = useCart()

  return (
    <div className="container min-h-[90vh] flex flex-col">
      <h1 className="text-[48px] font-extrabold">Comprar</h1>
      {cart.length ? (
        <>
          <div className="mt-8 flex flex-col gap-4">
            {cart.map((asset) => <Asset key={asset.id} asset={asset} />)}
          </div>
          <div className="flex flex-col gap-4 mt-auto">
            <div className="flex bg-gray-dark px-6 py-4 rounded justify-between items-center">
              <h3 className="font-medium text-lg">Total</h3>
              <span className="font-bold text-lg">
                {cart.reduce((acc, asset) => acc + asset.price, 0).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
              </span>
            </div>
            <button className="bg-primary text-white p-4 rounded">Finalizar compra</button>
          </div>
        </>
      ) : (
        <div className="mt-8 flex flex-col items-center justify-center gap-4 min-h-96">
          <Frown className="text-primary" size={72}/>
          <p className="text-2xl text-stone-500">Nenhum ativo no carrinho</p>
        </div>
      )}
    </div>
  )
}

export default BuyPage
