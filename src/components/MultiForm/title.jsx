import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Title = React.forwardRef(({ className, ...props }, ref) => (
  <h2 ref={ref} className={twMerge('text-2xl font-bold tracking-tight', className)} {...props} />
))
