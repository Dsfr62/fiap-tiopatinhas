import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Button = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={twMerge(
      'ring-offset-background focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-md bg-primary-default px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-default/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      className
    )}
    {...props}
  />
))
