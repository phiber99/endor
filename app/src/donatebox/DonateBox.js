import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles((theme) => ({


    grid2: {
      background: "white",
      marginBottom: "100px",
      marginTop: "10%"

    },
   
    cover: {
      height: "100%",
      width: "100%",
      marginTop: "100px",
      marginBottom: "100px",
    }

  }))

const DonateBox = () => {
    const classes = useStyles()

    return(
        <Container>
          <CardActionArea href="https://thewaterproject.org/give-water">
          <Grid justify="center"
                direction="column"
                width = "100%"
                className={classes.grid2}>
              <CardMedia
          data-testid="cardmedia"
          component="img"
          height="100%"
          width= "100%"
         image={"/pictures/donate2.png"}
        />
        </Grid>
        </CardActionArea>
      </Container>
    )
}




export default DonateBox
