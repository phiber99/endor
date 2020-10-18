import React from 'react'
import { WaterUsagePreview } from '../components/map/WaterUsageMap'
import { data } from '../components/waterUsageData'
import { useTheme, makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Typography
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  title: {
    fontSize: 14
  },
  text: {
    fontSize: "max(16px, 1vw)",
    textAlign: "left",
    fontFamily: 'GT America Mono,Arial,sans-serif',
  },
  card: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      maxWidth: 500,
    },
  }
}));

const WaterUsageNavigation = () => {
  const theme = useTheme()
  const classes = useStyles(theme)
  const history = useHistory()

  const handlePreviewClick = () => {
    history.push("waterusage")
  }

  return (
    <Container data-testid="water-preview" maxWidth="lg" className={classes.wrapper}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" className={classes.text}>
            Annual freshwater withdrawals by country
          </Typography>
          <p className={classes.text}>
            In the period from 1967 until today the country with the largest annual freshwater withdrawal was India at almost 650m³ in 2010 followed by China at almost 600m³ in 2012 and the United States at over 500m³ in 1980.
          </p>
        </Grid>
        <Grid container item xs={12} md={6} justify="center">
          <Card className={classes.card}>
            <CardActionArea
              style={{ height: "100%", width: "100%" }}
              onClick={handlePreviewClick}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Preview of water withdrawals page
              </Typography>
                <WaterUsagePreview data={data} />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default WaterUsageNavigation