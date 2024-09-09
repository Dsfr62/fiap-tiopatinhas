import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { CartProvider } from '../contexts/CartContext'

const Layout = () => {
  return (
    <CartProvider>
      <div className="flex h-screen bg-background">
        <Sidebar />
        <main className="h-auto grow overflow-auto px-10 py-4">
          <Outlet />
        </main>
      </div>
    </CartProvider>
  )
}

export default Layout
