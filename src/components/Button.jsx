import { twMerge } from 'tailwind-merge'

const Button = ({ children, type, onClick, variantStyle = 'primary', width, ...rest }) => {
  const defaultStyle = 'px-4 py-1 rounded-[8px] font-bold ease-linear transition-all cursor-pointer'

  const getVariantStyle = () => {
    switch (variantStyle) {
      case 'primary':
        return 'bg-primary-default text-white hover:bg-opacity-80'
      case 'secondary':
        return 'bg-secondary-default text-white hover:bg-opacity-80'
      case 'tertiary':
        return 'bg-white border-2 border-primary-default text-primary-default hover:bg-opacity-90'
    }
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(`${defaultStyle} ${getVariantStyle()} ${width}`, rest.className)}
    >
      {children}
    </button>
  )
}

export default Button
