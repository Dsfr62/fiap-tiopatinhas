import React from 'react'
import { Link } from 'react-router-dom'
import { members } from '../utils/members'
import { shuffleArray } from '../utils/functions'
import { routes } from '../routes'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 text-sm text-gray-600">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-gray-800">TekDev</h3>
            <p className="text-sm">Um projeto para a FIAP em parceria com a SoftTek</p>
            <Link
              to="https://github.com/mariconpe/fiap-softtek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 transition-colors duration-200 hover:text-primary-700"
            >
              Github
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Links Rápidos</h3>
            <ul className="space-y-2">
              {routes.slice(0, 3).map((route) => (
                <li key={`Footer ${route.id}`}>
                  <Link to={route.path} className="transition-colors duration-200 hover:text-primary-600">
                    {route.id}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Feito com ❤️ por:</h3>
            <ul className="space-y-2">
              {shuffleArray(members).map((member) => (
                <li key={member[1]}>
                  <Link
                    to={member[2]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-primary-600"
                  >
                    {member[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-4 text-center">
          © TekDev {currentYear} - Todos os direitos reservados
        </div>
      </div>
    </footer>
  )
}

export default Footer
