import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className="bg-background relative flex min-h-screen">
      <Sidebar />
      <main className="grow px-10 py-4">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
