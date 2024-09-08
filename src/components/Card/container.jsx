import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Container = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={twMerge('rounded-lg border bg-white text-gray-900 shadow-sm', className)} {...props} />
))
