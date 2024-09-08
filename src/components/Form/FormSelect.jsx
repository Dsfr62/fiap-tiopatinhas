import { twMerge } from 'tailwind-merge'

const FormSelect = ({ id, value, required, disabled, onInput, children, color, ...rest }) => {
  const defaultStyle =
    'p-2 rounded-2xl bg-transparent font-bold text-secondary cursor-pointer hover:text-primary focus:outline-none ease-linear transition-all'

  const getColor = (color = 'primary') => {
    switch (color) {
      case 'primary':
        return 'bg-gray text-secondary hover:text-primary'
      case 'secondary':
        return 'text-secondary hover:text-primary'
    }
  }

  //TODO: Se quiser alterar estado e salvar, colocar aqui
  return (
    <select
      id={id}
      value={value}
      className={twMerge(`${defaultStyle} ${getColor(color)}`, rest.className)}
      required={required}
      disabled={disabled}
      onInput={onInput}
    >
      {children}
    </select>
  )
}

export default FormSelect
