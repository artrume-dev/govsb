import { cn } from '../utils/formatters'

export const Button = ({ children, className, disabled, variant = 'default', ...props }) => {
  const variants = {
    default: 'bg-primary hover:bg-primary/90 text-white',
    destructive: 'bg-danger hover:bg-danger/90 text-white',
    outline: 'border border-gray-300 bg-white hover:bg-gray-50 text-gray-700',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
    ghost: 'hover:bg-gray-100 text-gray-700'
  }

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
