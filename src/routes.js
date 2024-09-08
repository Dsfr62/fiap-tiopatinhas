import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import DashboardPage from './pages/Dashboard/Dashboard'
import BuyPage from './pages/Buy/Buy'
import SellPage from './pages/Sell'
import HistoryPage from './pages/History'
import { BarChart, LayoutDashboard, ScrollText, Wallet } from 'lucide-react'

export const routes = [
  { path: '/', element: <DashboardPage />, id: 'Dashboard', icon: LayoutDashboard },
  { path: '/buy', element: <BuyPage />, id: 'Comprar', icon: Wallet },
  { path: '/sell', element: <SellPage />, id: 'Vender', icon: BarChart },
  { path: '/history', element: <HistoryPage />, id: 'Histórico', icon: ScrollText },
]

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  )
}

export default AppRoutes
