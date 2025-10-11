import { useState, useCallback } from 'react'
import { analyzeUrl, getHistory as fetchHistory } from '../services/api'

export const useBrandAnalysis = () => {
  const [analysis, setAnalysis] = useState(null)
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const analyze = useCallback(async (url, queries = null, custom_keywords = null) => {
    setLoading(true)
    setError(null)

    try {
      const result = await analyzeUrl(url, queries, custom_keywords)
      setAnalysis(result)
      setHistory(prev => [result, ...prev])
      return result
    } catch (err) {
      const errorMessage = err.message || 'Failed to analyze brand'
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const getHistory = useCallback(async () => {
    try {
      const data = await fetchHistory()
      setHistory(data.analyses || [])
      return data
    } catch (err) {
      setError(err.message)
      throw err
    }
  }, [])

  const reset = useCallback(() => {
    setAnalysis(null)
    setError(null)
  }, [])

  return {
    analysis,
    history,
    loading,
    error,
    analyze,
    getHistory,
    reset
  }
}
