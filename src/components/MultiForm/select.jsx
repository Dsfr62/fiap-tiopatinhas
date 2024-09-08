import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Select = React.forwardRef(({ className, ...props }, ref) => (
  <select
    ref={ref}
    className={twMerge(
      'border-input bg-background ring-offset-background focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  />
))
