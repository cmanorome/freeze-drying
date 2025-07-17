import React from 'react';
import { ProcessPhase } from '../App';

interface TemperaturePressureChartProps {
  currentPhase: ProcessPhase;
}

const TemperaturePressureChart: React.FC<TemperaturePressureChartProps> = ({ currentPhase }) => {
  const phases = ['initial', 'freezing', 'primary-drying', 'secondary-drying', 'complete'];
  const currentPhaseIndex = phases.indexOf(currentPhase);

  const temperatureData = [
    { phase: 'initial', temp: 20, label: 'Room Temp' },
    { phase: 'freezing', temp: -40, label: 'Freezing' },
    { phase: 'primary-drying', temp: -20, label: 'Primary' },
    { phase: 'secondary-drying', temp: 40, label: 'Secondary' },
    { phase: 'complete', temp: 20, label: 'Complete' }
  ];

  const pressureData = [
    { phase: 'initial', pressure: 1013, label: 'Atmospheric' },
    { phase: 'freezing', pressure: 1013, label: 'Atmospheric' },
    { phase: 'primary-drying', pressure: 0.2, label: 'Vacuum' },
    { phase: 'secondary-drying', pressure: 0.1, label: 'Deep Vacuum' },
    { phase: 'complete', pressure: 1013, label: 'Atmospheric' }
  ];

  const getTemperatureY = (temp: number) => {
    // Convert temperature (-50 to 50) to chart position (0 to 200)
    return 200 - ((temp + 50) / 100) * 200;
  };

  const getPressureY = (pressure: number) => {
    // Log scale for pressure (0.1 to 1013) to chart position (0 to 200)
    const logPressure = Math.log10(pressure);
    const minLog = Math.log10(0.1);
    const maxLog = Math.log10(1013);
    return 200 - ((logPressure - minLog) / (maxLog - minLog)) * 200;
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
      <h3 className="text-xl font-bold mb-4 text-blue-400">Temperature & Pressure Profile</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Temperature Chart */}
        <div className="bg-gray-800 rounded p-4">
          <h4 className="text-lg font-semibold mb-3 text-red-400">Temperature (°C)</h4>
          <div className="relative h-48">
            <svg className="w-full h-full" viewBox="0 0 300 200">
              {/* Grid lines */}
              {[-40, -20, 0, 20, 40].map((temp) => (
                <g key={temp}>
                  <line
                    x1="30"
                    y1={getTemperatureY(temp)}
                    x2="270"
                    y2={getTemperatureY(temp)}
                    stroke="#374151"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                  />
                  <text
                    x="25"
                    y={getTemperatureY(temp) + 4}
                    className="text-xs fill-gray-400"
                    textAnchor="end"
                  >
                    {temp}°
                  </text>
                </g>
              ))}

              {/* Temperature line */}
              <polyline
                points={temperatureData.map((d, i) => 
                  `${30 + (i * 60)},${getTemperatureY(d.temp)}`
                ).join(' ')}
                fill="none"
                stroke="#ef4444"
                strokeWidth="3"
              />

              {/* Data points */}
              {temperatureData.map((d, i) => (
                <g key={d.phase}>
                  <circle
                    cx={30 + (i * 60)}
                    cy={getTemperatureY(d.temp)}
                    r={i === currentPhaseIndex ? "6" : "4"}
                    fill={i === currentPhaseIndex ? "#fbbf24" : "#ef4444"}
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <text
                    x={30 + (i * 60)}
                    y="195"
                    className="text-xs fill-gray-400"
                    textAnchor="middle"
                  >
                    {d.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Pressure Chart */}
        <div className="bg-gray-800 rounded p-4">
          <h4 className="text-lg font-semibold mb-3 text-purple-400">Pressure (mbar)</h4>
          <div className="relative h-48">
            <svg className="w-full h-full" viewBox="0 0 300 200">
              {/* Grid lines */}
              {[0.1, 1, 10, 100, 1000].map((pressure) => (
                <g key={pressure}>
                  <line
                    x1="30"
                    y1={getPressureY(pressure)}
                    x2="270"
                    y2={getPressureY(pressure)}
                    stroke="#374151"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                  />
                  <text
                    x="25"
                    y={getPressureY(pressure) + 4}
                    className="text-xs fill-gray-400"
                    textAnchor="end"
                  >
                    {pressure < 1 ? pressure.toFixed(1) : pressure}
                  </text>
                </g>
              ))}

              {/* Pressure line */}
              <polyline
                points={pressureData.map((d, i) => 
                  `${30 + (i * 60)},${getPressureY(d.pressure)}`
                ).join(' ')}
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="3"
              />

              {/* Data points */}
              {pressureData.map((d, i) => (
                <g key={d.phase}>
                  <circle
                    cx={30 + (i * 60)}
                    cy={getPressureY(d.pressure)}
                    r={i === currentPhaseIndex ? "6" : "4"}
                    fill={i === currentPhaseIndex ? "#fbbf24" : "#8b5cf6"}
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <text
                    x={30 + (i * 60)}
                    y="195"
                    className="text-xs fill-gray-400"
                    textAnchor="middle"
                  >
                    {d.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>

      {/* Key Scientific Principles */}
      <div className="mt-6 p-4 bg-gray-800 rounded border border-gray-700">
        <h4 className="text-lg font-semibold mb-3 text-blue-400">Key Scientific Principles</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 className="font-semibold text-cyan-400 mb-2">Triple Point of Water</h5>
            <p className="text-gray-300">
              At 611.657 Pa and 0.01°C, water can exist as solid, liquid, and gas simultaneously. 
              Freeze drying exploits this by operating below the triple point pressure.
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-cyan-400 mb-2">Sublimation Process</h5>
            <p className="text-gray-300">
              Ice transitions directly to vapor without melting, preserving cellular structure 
              and preventing damage from liquid water formation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperaturePressureChart; 