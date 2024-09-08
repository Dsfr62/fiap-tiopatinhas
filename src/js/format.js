export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
}

export const formatDateTime = (date) => {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date))
}