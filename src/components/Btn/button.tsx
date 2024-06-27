import * as React from 'react'

const buttonVariants = {
  variant: {
    default: 'bg-blue-500 text-white hover:bg-blue-700',
    destructive: 'bg-red-500 text-white hover:bg-red-700',
    outline: 'border border-gray-500 bg-white hover:bg-gray-200',
    secondary: 'bg-gray-500 text-white hover:bg-gray-700',
    ghost: 'hover:bg-gray-200 hover:text-gray-700',
    link: 'text-blue-500 underline hover:text-blue-700',
  },
  size: {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 px-3',
    lg: 'h-11 px-8',
    icon: 'h-10 w-10',
  },
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof (typeof buttonVariants)['variant']
  size?: keyof (typeof buttonVariants)['size']
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'default', className, ...props }, ref) => {
    const classes = [
      buttonVariants.variant[variant],
      buttonVariants.size[size],
      className,
    ].join(' ')

    // eslint-disable-next-line react/jsx-props-no-spreading, react/button-has-type
    return <button className={classes} ref={ref} {...props} />
  },
)

Button.displayName = 'Button'

export { Button }
