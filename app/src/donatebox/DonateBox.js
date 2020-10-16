import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { BottomNavigation, Button, Container, Typography } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import Link from '@material-ui/core/Link'
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
