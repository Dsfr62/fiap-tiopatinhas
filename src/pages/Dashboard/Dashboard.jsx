import { useState } from 'react'
import { Bitcoin, Receipt, Wallet } from 'lucide-react'
import FormSelect from '../../components/Form/FormSelect'
import { MonthlyChart } from './components/MonthlyChart'
import { ReceiptCard } from './components/ReceiptCard'
import { Assets } from './components/Assets'
import { Cart } from '../../components/Cart'

const DashboardPage = () => {
  const [assetsTimeframe, setAssetsTimeframe] = useState('24h')

  const changeAssetsTimeframe = (e) => {
    setAssetsTimeframe(e.target.value)
  }

  return (
    <div className='container'>
      <h1 className="text-[48px] font-black">Dashboard</h1>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <MonthlyChart />
        <div className='w-full flex flex-col gap-2'>
          <h2 className='font-semibold text-2xl'>A Receber</h2>
          <div className='grid grid-cols-3 gap-8 flex-1'>
            <ReceiptCard Icon={Receipt} title="Receita" value={37000.6} />
            <ReceiptCard Icon={Bitcoin} title="Despesas" value={12900.42} />
            <ReceiptCard Icon={Wallet} title="Saldo" value={24100.18} />
          </div>
        </div>
      </div>
      <div className='flex flex-col mt-16'>
        <div className='flex justify-between'>
        <h2 className='font-semibold text-2xl'>Principais Ativos</h2>
          <FormSelect 
            value={assetsTimeframe} 
            color="primary" 
            onInput={changeAssetsTimeframe}
          >
            <option value="1">24h</option>
            <option value="2">Semana</option>
            <option value="3">Mês</option>
          </FormSelect>
        </div>
        <Assets />
      </div>
      <Cart />
    </div>
  )
}

export default DashboardPage
