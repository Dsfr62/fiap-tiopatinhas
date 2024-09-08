import { useMemo } from "react"
import { getRandNums } from "../../../js/getRandData"

const bigNums = (length) => getRandNums(length, 100_000, 5_000_000)

const mockData = {
  Janeiro: bigNums(31),
  Fevereiro: bigNums(28),
  Março: bigNums(31),
  Abril: bigNums(30),
  Maio: bigNums(31),
  Junho: bigNums(30),
  Julho: bigNums(31),
  Agosto: bigNums(31),
  Setembro: bigNums(30),
  Outubro: bigNums(31),
  Novembro: bigNums(30),
  Dezembro: bigNums(31),
}

export const months = Object.keys(mockData)

export const useMonthlyChart = ({
  month,
}) => {
  // transform to reCharts format
  const data = mockData[month].map((value, index) => ({
    name: index + 1,
    amt: value
  }))

  const total = useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.amt, 0)
  }, [data])

  return {
    data, total
  }
}