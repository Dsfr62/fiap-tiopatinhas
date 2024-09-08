import { twMerge } from 'tailwind-merge'

const FormInputContainer = ({ children, ...rest }) => {
  const defaultStyle = 'w-full flex flex-col'
  return <div className={twMerge(defaultStyle, rest.className)}>{children}</div>
}

export default FormInputContainer
