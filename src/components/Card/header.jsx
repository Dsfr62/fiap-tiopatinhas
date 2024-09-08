import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Header = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={twMerge('flex flex-col space-y-1.5 p-6', className)} {...props} />
))
