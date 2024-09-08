import { Link } from "react-router-dom"
import { useCart } from "../hooks/useCart"
import { ShoppingCart } from "lucide-react"

export const Cart = () => {
  const { cart } = useCart()

  return cart.length ? (
    <Link to="/buy">
      <div className="absolute bottom-4 right-4 bg-primary p-3 rounded text-white">
        <ShoppingCart />
        <span className="absolute bg-secondary w-8 rounded-full p-1 aspect-square -top-3 -left-3 grid place-items-center">
          {cart.length}
        </span>
      </div>
    </Link>
  ) : null
}