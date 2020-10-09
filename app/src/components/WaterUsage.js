import React from "react";
import {
  Container,
  Typography
} from '@material-ui/core'
import WaterUsageTable from './waterUsageTable/WaterUsageTable'
import { data } from './waterUsageData'

const WaterUsage = () => {
  return (
    <Container
      maxWidth="lg">
      <Typography variant="h4" >Annual freshwater withdrawals by country</Typography>
      <WaterUsageTable data={data} />
    </Container>
  );
}

export default WaterUsage;