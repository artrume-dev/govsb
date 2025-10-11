const API_BASE_URL = 'http://localhost:8000'

/**
 * Analyze brand from URL
 */
export const analyzeUrl = async (url, queries = null, custom_keywords = null) => {
  if (!url) throw new Error('URL is required')

  const payload = { url }
  if (queries) payload.queries = queries
  if (custom_keywords) payload.custom_keywords = custom_keywords

  const response = await fetch(`${API_BASE_URL}/api/brands/analyze`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.detail || `HTTP ${response.status}: ${response.statusText}`)
  }

  return response.json()
}

/**
 * Get analysis history
 */
export const getHistory = async (limit = 10) => {
  const response = await fetch(`${API_BASE_URL}/api/brands/history?limit=${limit}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch history: ${response.statusText}`)
  }

  return response.json()
}

/**
 * Clear history
 */
export const clearHistory = async () => {
  const response = await fetch(`${API_BASE_URL}/api/brands/history`, {
    method: 'DELETE'
  })

  if (!response.ok) {
    throw new Error(`Failed to clear history: ${response.statusText}`)
  }

  return response.json()
}

/**
 * Health check
 */
export const healthCheck = async () => {
  const response = await fetch(`${API_BASE_URL}/health`)
  if (!response.ok) throw new Error('API is not available')
  return response.json()
}
