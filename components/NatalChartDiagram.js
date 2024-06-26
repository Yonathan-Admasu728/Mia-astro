import React from 'react';
import styles from '../styles/NatalChartDiagram.module.css';

const NatalChartDiagram = () => {
    const zodiacSigns = [
      'Aries', 'Taurus', 'Gemini', 'Cancer', 
      'Leo', 'Virgo', 'Libra', 'Scorpio', 
      'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
    ];
  
    const planets = [
      { symbol: '☉', name: 'Sun', position: 135 },
      { symbol: '☽', name: 'Moon', position: 205 },
      { symbol: '☿', name: 'Mercury', position: 150 },
      { symbol: '♀', name: 'Venus', position: 110 },
      { symbol: '♂', name: 'Mars', position: 50 },
      { symbol: '♃', name: 'Jupiter', position: 10 },
      { symbol: '♄', name: 'Saturn', position: 330 },
      { symbol: '⛢', name: 'Uranus', position: 45 },
      { symbol: '♆', name: 'Neptune', position: 355 },
      { symbol: '♇', name: 'Pluto', position: 300 },
    ];
  
  return (
    <div className={styles.chartContainer}>
      <svg viewBox="0 0 400 400" className={styles.chart}>
        {/* Background circle */}
        <circle cx="200" cy="200" r="198" fill="rgba(255, 255, 255, 0.1)" />
        
        {/* Outer circle */}
        <circle cx="200" cy="200" r="195" fill="none" stroke="#ffd700" strokeWidth="2" />

        {/* Zodiac signs */}
        {zodiacSigns.map((sign, index) => {
          const angle = index * 30 - 90;
          const x = 200 + 180 * Math.cos(angle * Math.PI / 180);
          const y = 200 + 180 * Math.sin(angle * Math.PI / 180);
          return (
            <text
              key={sign}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="12"
              fill="#ffd700"
              fontWeight="bold"
            >
              {sign}
            </text>
          );
        })}

        {/* House lines */}
        {[...Array(12)].map((_, index) => {
          const angle = index * 30;
          const x2 = 200 + 195 * Math.cos(angle * Math.PI / 180);
          const y2 = 200 + 195 * Math.sin(angle * Math.PI / 180);
          return (
            <line
              key={`house-${index}`}
              x1="200"
              y1="200"
              x2={x2}
              y2={y2}
              stroke="#ffd700"
              strokeWidth="1"
            />
          );
        })}

        {/* Planets */}
        {planets.map((planet) => {
          const x = 200 + 140 * Math.cos((planet.position - 90) * Math.PI / 180);
          const y = 200 + 140 * Math.sin((planet.position - 90) * Math.PI / 180);
          return (
            <g key={planet.name}>
              <circle cx={x} cy={y} r="10" fill="#ff69b4" />
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="14"
                fill="#ffffff"
                fontWeight="bold"
              >
                {planet.symbol}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default NatalChartDiagram;