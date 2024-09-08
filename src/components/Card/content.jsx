import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Content = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={twMerge('p-6 pt-0', className)} {...props} />
))
