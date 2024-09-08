import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className="bg-background relative flex min-h-screen">
      <Sidebar />
      <main className="grow">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
