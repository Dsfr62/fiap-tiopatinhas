import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Container = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={twMerge('bg-gray rounded-2xl px-4 py-6 shadow-sm', className)} {...props} />
))
