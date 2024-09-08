import { useState } from 'react'
import { Link, useHref } from 'react-router-dom'
import { routes } from '../routes'
import BurgerSvg from '../assets/svgs/burger.svg'
import CloseSvg from '../assets/svgs/close.svg'
import logo_sem_fundo from '../assets/logo-sem-fundo.gif'

const Navbar = () => {
  const pathname = useHref()
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  const closeNavbar = () => {
    setIsOpen(false)
  }

  return (
    <nav className="w-full border-b-[1px] border-b-[#F2F4F7] bg-[#F9FAFB]">
      <div className="container mx-auto flex h-[80px] w-full max-w-7xl flex-row items-center justify-between px-0 lg:flex-row lg:justify-between lg:px-[80px]">
        <div className="flex w-full items-center justify-between px-4 lg:w-auto">
          <div className="flex items-center justify-center gap-2">
            <img src={logo_sem_fundo} alt="" className="aspect-square w-[30px]" />
            <Link className="block text-2xl font-bold text-primary-default no-underline" to="/">
              TekDev
            </Link>
          </div>
          <button className="flex cursor-pointer items-center lg:hidden" onClick={handleToggleNavbar}>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black bg-opacity-10">
              {isOpen ? <img src={CloseSvg} alt="fechar" /> : <img src={BurgerSvg} alt="menu" />}
            </div>
          </button>
        </div>

        {/* Bloco contendo um fundo escuro que aparece quando o menu está aberto */}

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-[64px] z-10 h-[calc(100%-64px)] w-full bg-black bg-opacity-50 lg:hidden`}
          onClick={closeNavbar}
        />

        {/* Bloco contendo os links do menu */}

        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } absolute right-0 top-[64px] z-20 h-[calc(100%-64px)] w-[280px] flex-col bg-[#fafafb] lg:static lg:z-0 lg:flex lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:bg-transparent`}
        >
          <ul className="list-reset mt-2 flex flex-col lg:mt-0 lg:flex-row lg:items-center">
            {routes.slice(0, 3).map((route) => (
              <li key={route.id} className="mr-3 px-4">
                <Link
                  to={route.path}
                  className={`inline-block w-full border-b py-2 font-semibold hover:text-primary-default lg:border-0 ${
                    pathname === route.path ? 'text-primary-default' : 'text-black'
                  }`}
                  onClick={closeNavbar}
                >
                  {route.id}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
