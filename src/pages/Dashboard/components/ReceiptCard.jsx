import { formatCurrency } from "../../../js/format"

export const ReceiptCard = (
  {
    Icon,
    title,
    value,
  }
) => {
  return (
    <div className="bg-gray-dark flex flex-col p-4 gap-2 h-full rounded-lg items-center">
      <div className="rounded-lg p-3 bg-secondary w-fit text-white mt-2">
        {<Icon size={32} strokeWidth={1} />}
      </div>
      <h3>{title}</h3>
      <span className="font-medium text-lg mt-4">{formatCurrency(value)}</span>
    </div>
  )
}