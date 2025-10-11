/**
 * Format number as percentage
 */
export const formatPercentage = (num, decimals = 1) => {
  return `${num.toFixed(decimals)}%`
}

/**
 * Format date to readable string
 */
export const formatDate = (date) => {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

/**
 * Get sentiment text color class
 */
export const getSentimentColor = (sentiment) => {
  const s = sentiment?.toUpperCase() || ''
  const colors = {
    POSITIVE: 'text-success',
    NEGATIVE: 'text-danger',
    NEUTRAL: 'text-neutral',
    'NOT_MENTIONED': 'text-gray-500'
  }
  return colors[s] || 'text-gray-600'
}

/**
 * Get sentiment background color class
 */
export const getSentimentBgColor = (sentiment) => {
  const s = sentiment?.toUpperCase() || ''
  const colors = {
    POSITIVE: 'bg-green-100',
    NEGATIVE: 'bg-red-100',
    NEUTRAL: 'bg-gray-100',
    'NOT_MENTIONED': 'bg-gray-50'
  }
  return colors[s] || 'bg-gray-50'
}

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text, maxLength = 100, ellipsis = '...') => {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + ellipsis
}

/**
 * Get badge variant based on sentiment
 */
export const getBadgeVariant = (sentiment) => {
  const s = sentiment?.toUpperCase() || ''
  const variants = {
    POSITIVE: 'success',
    NEGATIVE: 'danger',
    NEUTRAL: 'neutral',
    'NOT_MENTIONED': 'secondary'
  }
  return variants[s] || 'secondary'
}

/**
 * Combine class names
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}
