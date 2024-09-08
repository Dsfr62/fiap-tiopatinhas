import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Description = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={twMerge('text-sm text-gray-500', className)} {...props} />
))
