import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Footer = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={twMerge('flex items-center p-6 pt-0', className)} {...props} />
))
