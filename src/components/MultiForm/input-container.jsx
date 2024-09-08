import React from 'react'
import { twMerge } from 'tailwind-merge'

export const InputContainer = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={twMerge('space-y-2', className)} {...props} />
))
