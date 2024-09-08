import { twMerge } from 'tailwind-merge'

const FormContainer = ({ children, onSubmit, id, isLoading, ...rest }) => {
  const defaultStyle = 'flex flex-col gap-4 w-full md:w-[500px] h-auto text-black'
  return (
    <form
      id={id}
      onSubmit={(e) => onSubmit(e)}
      className={twMerge(`${defaultStyle} ${isLoading && 'animate-pulse'}`, rest.className)}
    >
      {children}
    </form>
  )
}

export default FormContainer
