import {axisBottom, axisRight} from 'd3-axis';
import {scaleBand, scaleLinear} from 'd3-scale';
import {select} from 'd3-selection';
import React, {useEffect, useRef, useState} from 'react';
const RatingChart = ({
  data,
  title = '',
  theme = {
    background: '#1e0e1e',
    barColor: '#e74c3c',
    textColor: '#aa4c4c',
  },
}) => {
  const svgRef = useRef();
  const [hoverData, setHoverData] = useState(null);

  useEffect(() => {
    if (!data || !Array.isArray(data.xpoints) || !Array.isArray(data.ypoints))
      return;

    const svg = select(svgRef.current);
    svg.selectAll('*').remove();

    const width = 980;
    const height = 462;
    const margin = {top: 20, right: 50, bottom: 110, left: 90};

    const x = scaleBand()
      .domain(data.xpoints)
      .range([margin.left, width - margin.right])
      .padding(0.3);

    const y = scaleLinear()
      .domain([0, Math.max(...data.ypoints.map((d) => +d))])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const chart = svg
      .attr('viewBox', `0 0 ${width} ${height}`)
      .style('background', theme.background)
      .style('border-radius', '12px');

    const barWidth = Math.min(x.bandwidth(), 40);

    chart
      .selectAll('.bar')
      .data(data.xpoints.map((label, i) => ({label, value: +data.ypoints[i]})))
      .enter()
      .append('rect')
      .attr('x', (d) => x(d.label) + (x.bandwidth() - barWidth) / 2)
      .attr('y', (d) => y(d.value))
      .attr('width', barWidth)
      .attr('height', (d) => y(0) - y(d.value))
      .attr('fill', theme.barColor)
      .attr('rx', 1)
      .on('mouseenter', (event, d) => setHoverData(d))
      .on('mouseleave', () => setHoverData(null));

    chart
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(axisBottom(x))
      .selectAll('text')
      .attr('fill', theme.textColor)
      .style('font-size', '1rem')
      .attr('text-anchor', 'middle')
      .style('text-anchor', 'end') // aligns the text better
      .attr('dx', '-0.8em') // shift left a bit
      .attr('dy', '0.15em') // slight downward shift
      .attr('transform', 'rotate(-40)');

    chart
      .append('g')
      .attr('transform', `translate(${width - margin.right}, 0)`)
      .call(axisRight(y).ticks(5))
      .selectAll('text')
      .attr('fill', theme.textColor)
      .style('font-size', '1.4rem');

    chart
      .selectAll('.domain, .tick line')
      .attr('stroke', theme.textColor)
      .attr('stroke-width', 1);
  }, [data, theme]);

  return (
    <div
      className="simple-bar-chart"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '580px',
        borderRadius: '12px',
        overflow: 'hidden',
        background: `${theme.background}`,
      }}
    >
      <svg ref={svgRef} style={{width: '100%', height: 'auto'}} />

      <div
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          color: theme.barColor,
          fontSize: '0.9rem',
          background: 'transparent',
          pointerEvents: 'none',
          lineHeight: '1.4',
        }}
      >
        <div style={{fontWeight: 'bold'}}>{title}</div>
        {hoverData && (
          <>
            <div>{hoverData.label}</div>
            <div style={{fontSize: '1.2rem'}}>{hoverData.value}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default RatingChart;
