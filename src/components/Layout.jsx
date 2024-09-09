import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { CartProvider } from '../contexts/CartContext'

const Layout = () => {
  return (
    <CartProvider>
      <div className="flex h-screen w-full bg-background">
        <Sidebar />
        <main className="h-auto w-[90%] overflow-auto px-10 py-4 lg:w-[100%]">
          <Outlet />
        </main>
      </div>
    </CartProvider>
  )
}

export default Layout
