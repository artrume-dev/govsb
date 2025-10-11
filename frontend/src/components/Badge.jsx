import { cn } from '../utils/formatters'

export const Badge = ({ children, className, variant = 'default', ...props }) => {
  const variants = {
    default: 'bg-primary text-white',
    secondary: 'bg-gray-200 text-gray-900',
    destructive: 'bg-danger text-white',
    success: 'bg-success text-white',
    outline: 'border border-gray-300 text-gray-700'
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
