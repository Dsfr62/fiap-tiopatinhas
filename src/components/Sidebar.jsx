import { Link, useHref } from 'react-router-dom'
import logo from '../assets/logos/Logo.svg'
import { LayoutDashboard, LogOut } from 'lucide-react'
import { routes } from '../routes'

const Sidebar = () => {
  const pathname = useHref()
  const isActiveStyle = 'border-primary text-primary'

  const handleIsActive = (path) => {
    return pathname === path ? isActiveStyle : 'text-white border-transparent hover:text-primary'
  }

  return (
    <nav className="bg-secondary flex w-[64px] flex-col justify-between gap-2 text-white lg:w-[160px]">
      <div className="flex flex-col gap-2">
        <div className="bg-background mx-auto my-4 flex h-[40px] w-[40px] items-center justify-center rounded-2xl lg:h-[80px] lg:w-[80px]">
          <img src={logo} alt="Logo" className="w-[24px] lg:w-[46px]" />
        </div>
        <div className="mt-8 space-y-4">
          {routes.map((route) => (
            <Link
              to={route.path}
              key={route.id}
              className={`flex h-[64px] w-full cursor-pointer items-center justify-center border-r-4 transition-all ease-linear lg:border-r-8 ${handleIsActive(route.path)}`}
            >
              <route.icon className="h-[24px] w-[24px] stroke-1 lg:h-[32px] lg:w-[32px]" />
            </Link>
          ))}
        </div>
      </div>
      <LogOut className="ease-linar hover:text-primary mx-auto mb-8 h-[24px] w-[24px] cursor-pointer border-r-4 border-transparent stroke-1 transition-all lg:h-[32px] lg:w-[32px] lg:border-r-8" />
    </nav>
  )
}

export default Sidebar
