import React, { useState } from 'react'
import { scaleLinear } from 'd3-scale'
import { Paper } from '@material-ui/core';
import { ComposableMap, Geographies, Geography, Sphere, Graticule, ZoomableGroup } from "react-simple-maps";
import * as worldMap from './world-110m.json'
import { averageWaterUsage, groupByCountryCode } from './ProcessWaterUsage'
import { useTheme, makeStyles } from "@material-ui/core/styles";
import ReactTooltip from "react-tooltip"

const rounded = num => {
  const real_num = num * 1000000000
  if (real_num > 1000000000) {
    return Math.round(real_num / 100000000) / 10 + "Bn";
  } else if (real_num > 1000000) {
    return Math.round(real_num / 100000) / 10 + "M";
  } else {
    return Math.round(real_num / 100) / 10 + "K";
  }
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

const WorldMap = props => {
  const { data, setTooltipContent, zoomable } = props
  const theme = useTheme()
  const grouped = groupByCountryCode(data)
  const averagedData = averageWaterUsage(grouped)
  const { min, max } = averagedData.reduce(
    ({ min, max }, curr) =>
      ({ max: Math.max(max, curr.volume), min: Math.min(min, curr.volume) }),
    { min: Number.MAX_VALUE, max: Number.MIN_VALUE }
  )
  const colorScale = scaleLinear().domain([min, max]).range(["#E3F2FD", "#0D47A1"])

  const map = (
    <>
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

              return (zoomable ?
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={value ? colorScale(value.volume) : "#F5F4F6"}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties
                    if (value === undefined)
                      setTooltipContent(`${NAME} - data not available`)
                    else
                      setTooltipContent(`${NAME} - ${rounded(value.volume)}`)
                  }}
                  onMouseLeave={() => setTooltipContent("")}
                  style={{
                    default: {
                      outline: "none"
                    },
                    hover: {
                      fill: theme.palette.secondary.light,
                      outline: "none"
                    },
                    pressed: {
                      outline: "none"
                    }
                  }}
                /> :
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={value ? colorScale(value.volume) : "#F5F4F6"}
                  style={{
                    default: {
                      outline: "none"
                    },
                    hover: {
                      outline: "none"
                    },
                    pressed: {
                      outline: "none"
                    }
                  }}
                />
              )
            })
          }
        }
      </Geographies>
    </>
  )

  if (zoomable) {
    return (
      <ComposableMap
        data-tip=""
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 147
        }}>
        <ZoomableGroup>
          {map}
        </ZoomableGroup>
      </ComposableMap>
    )
  }
  else {
    return (
      <ComposableMap
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 147
        }}>
        {map}
      </ComposableMap>
    )
  }
}

const WaterUsagePreview = props => {
  const { data } = props

  return (
    <WorldMap zoomable={false} data={data} />
  )
}

const WaterUsageMap = props => {
  const { data } = props
  const theme = useTheme()
  const classes = useStyles(theme)
  const [content, setContent] = useState("");

  return (
    <div>
      <Paper className={classes.wrapper}>
        <WorldMap zoomable={true} data={data} setTooltipContent={setContent} />
      </Paper>
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  )
}

export { WaterUsageMap, WaterUsagePreview }