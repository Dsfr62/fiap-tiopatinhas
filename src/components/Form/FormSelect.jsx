import { twMerge } from 'tailwind-merge'

const FormSelect = ({ id, value, required, disabled, onInput, children, ...rest }) => {
  const defaultStyle = 'p-1 border border-black bg-white rounded text-black'

  //TODO: Se quiser alterar estado e salvar, colocar aqui
  return (
    <select
      id={id}
      value={value}
      className={twMerge(defaultStyle, rest.className)}
      required={required}
      disabled={disabled}
      onInput={onInput}
    >
      {children}
    </select>
  )
}

export default FormSelect
