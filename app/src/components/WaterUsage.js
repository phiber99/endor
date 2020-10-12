import React from "react";
import {
  Container,
  Typography
} from '@material-ui/core'
import WaterUsageTable from './waterUsageTable/WaterUsageTable'
import { data } from './waterUsageData'
import WaterUsageMap from "./map/WaterUsageMap";

const WaterUsage = () => {
  return (
    <Container
      maxWidth="lg">
      <Typography variant="h4" >Annual freshwater withdrawals by country</Typography>
      <WaterUsageMap data={data} />
      <WaterUsageTable data={data} />
      <Typography variant="h6">Source: <a href="https://ourworldindata.org/water-use-stress">https://ourworldindata.org/water-use-stress</a></Typography>
    </Container>
  );
}

export default WaterUsage;