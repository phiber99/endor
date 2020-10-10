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
    </Container>
  );
}

export default WaterUsage;