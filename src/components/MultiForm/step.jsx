import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Step = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={twMerge('space-y-6', className)} {...props} />
))
