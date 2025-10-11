import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

/**
 * ConfidenceChart Component
 * Displays confidence levels as a horizontal bar chart
 */
export default function ConfidenceChart({ data, darkMode = false }) {
  const containerRef = useRef()
  const svgRef = useRef()

  useEffect(() => {
    if (!data || data.length === 0 || !svgRef.current || !containerRef.current) return

    // Clear previous chart
    d3.select(svgRef.current).selectAll('*').remove()

    // Get container width for responsiveness
    const containerWidth = containerRef.current.offsetWidth
    const margin = { top: 20, right: 60, bottom: 40, left: 180 }
    const width = Math.max(500, containerWidth - 40) - margin.left - margin.right
    const height = Math.min(400, data.length * 45) - margin.top - margin.bottom

    // Create SVG
    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    // Prepare data - take top 8 most confident for better visibility
    const chartData = data
      .filter(d => d.sentiment_analysis.mentioned)
      .sort((a, b) => b.sentiment_analysis.confidence - a.sentiment_analysis.confidence)
      .slice(0, 8)
      .map(d => ({
        query: d.query.length > 35 ? d.query.substring(0, 35) + '...' : d.query,
        fullQuery: d.query,
        confidence: d.sentiment_analysis.confidence * 100,
        sentiment: d.sentiment_analysis.sentiment,
      }))

    // Create scales
    const x = d3
      .scaleLinear()
      .domain([0, 100])
      .range([0, width])

    const y = d3
      .scaleBand()
      .range([0, height])
      .domain(chartData.map(d => d.query))
      .padding(0.2)

    // Color scale
    const colorMap = {
      POSITIVE: '#22c55e',
      NEGATIVE: '#ef4444',
      NEUTRAL: '#6b7280',
    }

    // Add X axis
    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('fill', darkMode ? '#9ca3af' : '#6b7280')

    svg
      .selectAll('.domain, .tick line')
      .attr('stroke', darkMode ? '#4b5563' : '#d1d5db')

    // Add Y axis with better text wrapping
    const yAxis = svg
      .append('g')
      .call(d3.axisLeft(y))
    
    yAxis
      .selectAll('text')
      .attr('fill', darkMode ? '#e5e7eb' : '#374151')
      .attr('font-size', '11px')
      .style('text-anchor', 'end')
      .attr('dx', '-0.5em')
      .attr('dy', '0.15em')

    // Add bars with tooltip
    const bars = svg
      .selectAll('bars')
      .data(chartData)
      .enter()
      .append('rect')
      .attr('x', 0)
      .attr('y', d => y(d.query))
      .attr('width', d => x(d.confidence))
      .attr('height', y.bandwidth())
      .attr('fill', d => colorMap[d.sentiment])
      .attr('opacity', 0.8)
      .attr('rx', 4)
      .style('cursor', 'pointer')
      .on('mouseenter', function (event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('opacity', 1)
          .attr('transform', 'scaleY(1.05)')
        
        // Show tooltip
        const tooltip = d3.select('body')
          .append('div')
          .attr('class', 'chart-tooltip')
          .style('position', 'absolute')
          .style('background', darkMode ? '#1f2937' : '#ffffff')
          .style('color', darkMode ? '#e5e7eb' : '#111827')
          .style('padding', '8px 12px')
          .style('border-radius', '6px')
          .style('border', `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`)
          .style('box-shadow', '0 4px 6px rgba(0,0,0,0.1)')
          .style('font-size', '12px')
          .style('max-width', '300px')
          .style('z-index', '1000')
          .style('pointer-events', 'none')
          .html(`<strong>${d.fullQuery}</strong><br/>Confidence: ${d.confidence.toFixed(1)}%`)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 10) + 'px')
      })
      .on('mousemove', function(event) {
        d3.select('.chart-tooltip')
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 10) + 'px')
      })
      .on('mouseleave', function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('opacity', 0.8)
          .attr('transform', 'scaleY(1)')
        
        // Remove tooltip
        d3.selectAll('.chart-tooltip').remove()
      })

    // Add value labels inside bars for better visibility
    svg
      .selectAll('labels')
      .data(chartData)
      .enter()
      .append('text')
      .attr('x', d => {
        const barWidth = x(d.confidence)
        return barWidth > 50 ? barWidth - 5 : barWidth + 5
      })
      .attr('y', d => y(d.query) + y.bandwidth() / 2)
      .attr('dy', '0.35em')
      .attr('text-anchor', d => x(d.confidence) > 50 ? 'end' : 'start')
      .attr('font-size', '13px')
      .attr('font-weight', '700')
      .attr('fill', d => {
        const barWidth = x(d.confidence)
        if (barWidth > 50) {
          return '#ffffff'
        }
        return darkMode ? '#e5e7eb' : '#111827'
      })
      .text(d => `${d.confidence.toFixed(0)}%`)

    // Add title for context
    svg
      .append('text')
      .attr('x', width / 2)
      .attr('y', -5)
      .attr('text-anchor', 'middle')
      .attr('font-size', '11px')
      .attr('font-weight', '500')
      .attr('fill', darkMode ? '#9ca3af' : '#6b7280')
      .text('Hover over bars for full query text')
  }, [data, darkMode])

  return (
    <div ref={containerRef} className="w-full flex justify-center">
      <div className="overflow-x-auto max-w-4xl w-full">
        <svg ref={svgRef}></svg>
      </div>
    </div>
  )
}
