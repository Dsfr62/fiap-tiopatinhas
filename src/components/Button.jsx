import { twMerge } from 'tailwind-merge'

const Button = ({ children, type, onClick, variantStyle = 'primary', ...rest }) => {
  const defaultStyle = 'p-4 rounded-2xl uppercase font-bold ease-linear transition-all cursor-pointer'

  const getVariantStyle = () => {
    switch (variantStyle) {
      case 'primary':
        return 'bg-primary text-secondary hover:bg-opacity-90'
      case 'secondary':
        return 'bg-secondary text-white hover:bg-opacity-90'
      case 'tertiary':
        return 'bg-secondary text-white hover:bg-primary hover:text-white'
    }
  }

  return (
    <button type={type} onClick={onClick} className={twMerge(`${defaultStyle} ${getVariantStyle()}`, rest.className)}>
      {children}
    </button>
  )
}

export default Button
