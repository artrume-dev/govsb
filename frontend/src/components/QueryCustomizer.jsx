import { useState } from 'react'
import { Plus, X, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

/**
 * QueryCustomizer Component
 * Allows users to add custom queries and keywords for brand analysis
 */
export default function QueryCustomizer({ onQueriesChange, onKeywordsChange }) {
  const [customQueries, setCustomQueries] = useState([])
  const [customKeywords, setCustomKeywords] = useState([])
  const [queryInput, setQueryInput] = useState('')
  const [keywordInput, setKeywordInput] = useState('')

  const addQuery = () => {
    if (queryInput.trim()) {
      const newQueries = [...customQueries, queryInput.trim()]
      setCustomQueries(newQueries)
      onQueriesChange?.(newQueries)
      setQueryInput('')
    }
  }

  const removeQuery = (index) => {
    const newQueries = customQueries.filter((_, i) => i !== index)
    setCustomQueries(newQueries)
    onQueriesChange?.(newQueries.length > 0 ? newQueries : null)
  }

  const addKeyword = () => {
    if (keywordInput.trim()) {
      // Split by comma and trim each keyword
      const keywordsToAdd = keywordInput
        .split(',')
        .map(k => k.trim())
        .filter(k => k.length > 0)

      const newKeywords = [...customKeywords, ...keywordsToAdd]
      setCustomKeywords(newKeywords)
      onKeywordsChange?.(newKeywords)
      setKeywordInput('')
    }
  }

  const removeKeyword = (index) => {
    const newKeywords = customKeywords.filter((_, i) => i !== index)
    setCustomKeywords(newKeywords)
    onKeywordsChange?.(newKeywords.length > 0 ? newKeywords : null)
  }

  const useDefaults = () => {
    setCustomQueries([])
    setCustomKeywords([])
    onQueriesChange?.(null)
    onKeywordsChange?.(null)
  }

  return (
    <Card className="bg-white border-0 rounded-none max-w-7xl mx-auto bg-slate-50/30 shadow-none">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 mb-2">
              Customise Analysis
            </CardTitle>
            <CardDescription className="text-xs text-muted-foreground">
              Add your own questions or keywords for deeper insights
            </CardDescription>
          </div>
          {(customQueries.length > 0 || customKeywords.length > 0) && (
            <Button variant="outline" size="sm" onClick={useDefaults}>
              Use Defaults
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Custom Queries */}
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium">Custom Questions</label>
            <p className="text-xs text-muted-foreground mb-2">
              Ask specific questions about the brand
            </p>
          </div>

          <div className="flex gap-2">
            <Input
              placeholder="e.g., How secure is this product?"
              value={queryInput}
              onChange={(e) => setQueryInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  addQuery()
                }
              }}
            />
            <Button onClick={addQuery} type="button" size="sm">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {customQueries.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {customQueries.map((query, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="flex items-center gap-1 py-1 px-3"
                >
                  <span className="text-xs">{query}</span>
                  <X
                    className="h-3 w-3 cursor-pointer hover:text-destructive"
                    onClick={() => removeQuery(index)}
                  />
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Custom Keywords */}
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium">Keywords/Topics</label>
            <p className="text-xs text-muted-foreground mb-2">
              Auto-generates 2 questions per keyword
            </p>
          </div>
          
          <div className="flex gap-2">
            <Input
              placeholder="e.g., security, pricing, support (comma-separated)"
              value={keywordInput}
              onChange={(e) => setKeywordInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  addKeyword()
                }
              }}
            />
            <Button onClick={addKeyword} type="button" size="sm">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {customKeywords.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {customKeywords.map((keyword, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="flex items-center gap-1 py-1 px-3"
                >
                  <span className="text-xs">{keyword}</span>
                  <X
                    className="h-3 w-3 cursor-pointer hover:text-destructive"
                    onClick={() => removeKeyword(index)}
                  />
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        {(customQueries.length > 0 || customKeywords.length > 0) && (
          <div className="text-xs text-muted-foreground bg-muted p-3 rounded-md">
            📊 Will analyze <strong>{customQueries.length + (customKeywords.length * 2)}</strong> custom queries
            {customQueries.length === 0 && ' + 5 default queries'}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
