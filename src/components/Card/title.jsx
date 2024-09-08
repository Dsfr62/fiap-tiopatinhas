import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Title = React.forwardRef(({ className, ...props }, ref) => (
  <h3 ref={ref} className={twMerge('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />
))
