import Button from '../Button'

const FormButton = ({ children, variantStyle, className }) => {
  return (
    <Button type="submit" width="w-80" variantStyle={variantStyle || 'primary'} className={className}>
      {children}
    </Button>
  )
}

export default FormButton
