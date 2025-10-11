import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

/**
 * SentimentChart Component
 * Displays sentiment distribution as a pie chart using D3.js
 */
export default function SentimentChart({ data, darkMode = false }) {
  const svgRef = useRef()

  useEffect(() => {
    if (!data || !svgRef.current) return

    // Clear previous chart
    d3.select(svgRef.current).selectAll('*').remove()

    const width = 300
    const height = 300
    const radius = Math.min(width, height) / 2

    // Colors for sentiment
    const colorMap = {
      POSITIVE: '#22c55e', // green-500
      NEGATIVE: '#ef4444', // red-500
      NEUTRAL: '#6b7280', // gray-500
    }

    // Prepare data
    const pieData = [
      { label: 'Positive', value: data.positive, sentiment: 'POSITIVE' },
      { label: 'Neutral', value: data.neutral, sentiment: 'NEUTRAL' },
      { label: 'Negative', value: data.negative, sentiment: 'NEGATIVE' },
    ].filter(d => d.value > 0)

    // Create SVG
    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`)

    // Create pie layout
    const pie = d3
      .pie()
      .value(d => d.value)
      .sort(null)

    // Create arc
    const arc = d3
      .arc()
      .innerRadius(radius * 0.5) // Donut chart
      .outerRadius(radius * 0.8)

    const outerArc = d3
      .arc()
      .innerRadius(radius * 0.85)
      .outerRadius(radius * 0.85)

    // Draw arcs
    const arcs = svg
      .selectAll('arc')
      .data(pie(pieData))
      .enter()
      .append('g')
      .attr('class', 'arc')

    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', d => colorMap[d.data.sentiment])
      .attr('opacity', 0.9)
      .attr('stroke', darkMode ? '#1f2937' : '#fff')
      .attr('stroke-width', 2)
      .on('mouseenter', function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('opacity', 1)
          .attr('transform', 'scale(1.05)')
      })
      .on('mouseleave', function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('opacity', 0.9)
          .attr('transform', 'scale(1)')
      })

    // Add labels
    arcs
      .append('text')
      .attr('transform', d => {
        const pos = outerArc.centroid(d)
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2
        pos[0] = radius * 0.95 * (midAngle < Math.PI ? 1 : -1)
        return `translate(${pos})`
      })
      .attr('text-anchor', d => {
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2
        return midAngle < Math.PI ? 'start' : 'end'
      })
      .attr('font-size', '14px')
      .attr('font-weight', '500')
      .attr('fill', darkMode ? '#e5e7eb' : '#374151')
      .text(d => `${d.data.label}: ${d.data.value}`)

    // Add center text
    svg
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('font-size', '24px')
      .attr('font-weight', '700')
      .attr('fill', darkMode ? '#e5e7eb' : '#111827')
      .attr('dy', '-0.2em')
      .text(data.positive + data.neutral + data.negative)

    svg
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('fill', darkMode ? '#9ca3af' : '#6b7280')
      .attr('dy', '1.2em')
      .text('Total')
  }, [data, darkMode])

  return (
    <div className="flex justify-center items-center">
      <svg ref={svgRef}></svg>
    </div>
  )
}
