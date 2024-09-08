import { twMerge } from 'tailwind-merge'

const FormTextarea = ({ id, value, defaultValue, required, placeholder, disabled, onInput, ...rest }) => {
  const defaultStyle = 'p-1 border border-black bg-white rounded text-black'

  //TODO: Se quiser alterar estado e salvar, colocar aqui
  return (
    <textarea
      id={id}
      value={value}
      defaultValue={defaultValue}
      className={twMerge(defaultStyle, rest.className)}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      onInput={onInput}
    />
  )
}

export default FormTextarea
