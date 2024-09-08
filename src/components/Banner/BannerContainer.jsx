import { twMerge } from 'tailwind-merge'

export const BannerContainer = ({ className, children, variantColor = 'primary', textPosition = 'center' }) => {
  const defaultStyle = 'h-auto w-full py-6 md:py-4 px-8 flex flex-col gap-2'

  const getTextPosition = () => {
    switch (textPosition) {
      case 'center':
        return 'text-center justify-center items-center'
      case 'left':
        return 'text-left justify-left items-left'
      case 'right':
        return 'text-right justify-right items-right'
    }
  }

  const getVariantColor = () => {
    switch (variantColor) {
      case 'primary':
        return 'text-white bg-gradient-to-b from-[5%] from-purple-600 to-primary-default'
      case 'secondary':
        return 'text-white bg-gradient-to-b from-[30%] from-primary-default to-primary-dark'
      case 'tertiary':
        return 'text-black bg-gray-200 bg-opacity-60'
      case 'negative':
        return 'text-black bg-white'
      case 'positive':
        return 'text-white bg-black'
    }
  }

  let style = `${defaultStyle} ${getVariantColor()} ${getTextPosition()}`

  return <div className={twMerge(style, className)}>{children}</div>
}
