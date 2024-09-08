import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Container = React.forwardRef(({ className, ...props }, ref) => (
  <form ref={ref} className={twMerge('mx-auto w-full max-w-2xl space-y-8', className)} {...props} />
))
