import React from "react";
import {
  Container,
  Typography
} from '@material-ui/core'
import WaterUsageTable from './waterUsageTable/WaterUsageTable'
import { data } from './waterUsageData'
import WorldMap from './map/WaterUsageMap'

const WaterUsage = () => {
  return (
    <Container
      maxWidth="lg">
      <Typography variant="h4" >Annual freshwater withdrawals by country</Typography>
      <WorldMap data={data} />
      <WaterUsageTable data={data} />
    </Container>
  );
}

export default WaterUsage;