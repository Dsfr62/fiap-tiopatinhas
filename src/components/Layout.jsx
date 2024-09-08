import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { CartProvider } from '../contexts/CartContext'

const Layout = () => {
  return (
    <CartProvider>
      <div className="bg-background relative flex min-h-screen">
        <Sidebar />
        <main className="grow px-10 py-4">
          <Outlet />
        </main>
      </div>
    </CartProvider>
  )
}

export default Layout
