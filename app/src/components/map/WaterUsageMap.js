import React from 'react'
import { scaleLinear } from 'd3-scale'
import { Paper } from '@material-ui/core';
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from "react-simple-maps";
import * as worldMap from './world-110m.json'
import { averageWaterUsage, groupByCountryCode } from './ProcessWaterUsage'


const WorldMap = props => {
  const { data } = props

  const grouped = groupByCountryCode(data)
  const averagedData = averageWaterUsage(grouped)
  const { min, max } = averagedData.reduce(
    ({ min, max }, curr) =>
      ({ max: Math.max(max, curr.volume), min: Math.min(min, curr.volume) }),
    { min: Number.MAX_VALUE, max: Number.MIN_VALUE }
  )
  const colorScale = scaleLinear().domain([min, max]).range(["#E3F2FD", "#0D47A1"])

  return (
    <Paper>
      <ComposableMap
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 147
        }}>
        <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
        <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
        <Geographies
          data-testid="water-usage-map"
          geography={worldMap.default}
          fill="#D6D6DA"
          stroke="#FFFFFF"
          strokeWidth={0.5}
        >
          {
            ({ geographies }) => {
              return geographies.map(geo => {
                const value = averagedData.find(({ code }) => code === geo.properties.ISO_A3)

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={value ? colorScale(value.volume) : "#F5F4F6"}
                  />
                )
              })
            }
          }
        </Geographies>
      </ComposableMap>
    </Paper>
  )
}

export default WorldMap