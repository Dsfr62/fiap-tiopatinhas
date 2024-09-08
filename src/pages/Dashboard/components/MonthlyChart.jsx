import { useState } from "react"
import { months, useMonthlyChart } from "../hooks/useMonthlyChart"
import { Area, AreaChart, ResponsiveContainer } from "recharts"
import { formatCurrency } from "../../../js/format"

export const MonthlyChart = () => {
  const [month, setMonth] = useState('Janeiro')
  const { data, total } = useMonthlyChart({ month })

  return (
    <div className="w-full rounded-3xl h-56 border border-primary relative overflow-hidden bg-[#fcd1be]">
      {/* Chart Overlay */}
      <div className="absolute w-full p-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold">
            {formatCurrency(total)}
          </h2>
          <span className="text-sm text-stone-600">Valor total</span>
        </div>
      </div>
      <div className="flex flex-col h-full">
        <ResponsiveContainer width="100%" height="80%">
          <AreaChart data={data} margin={{
            top: 40, right: 0, left: 0, bottom: 0
          }}>
            <Area type="monotone" dataKey="amt" stroke="#E77A4C" fill="#ffc3a9" fillOpacity={1}/>
          </AreaChart>
        </ResponsiveContainer>
        <div className="flex gap-4 px-4 h-1/5 bg-[#ffc3a9]">
          {months.slice(0, 6).map((m) => (
            <button 
              key={m} 
              className={`uppercase text-sm cursor-pointer text-stone-700 ${month === m ? 'font-semibold' : ''}`}
              onClick={() => setMonth(m)}
            >
              {m.slice(0, 3)}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}