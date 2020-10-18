import React from "react"
import './footer.css'
import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  footer: {
    padding: 8,
    background: theme.palette.primary.light
  },
  text: {
    color: theme.palette.primary.contrastText
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (


    
    <footer className={classes.footer}>


      <Container
        maxWidth="lg">
        <Grid container spacing={2} >
          <Grid item xs={12} md={6} justify="flex-start">
            <Typography variant="h5" className={classes.text} >NAVIGATE</Typography>
            <ul className="footer-ul">
              {/* eslint-disable-next-line */}
              <li><a href="https://www.gu.se/" target="_blank" className={classes.text}>Home</a></li>
              {/* eslint-disable-next-line */}
              <li><a href="https://twitter.com/goteborgsuni?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" className={classes.text}>Twitter</a></li>
              {/* eslint-disable-next-line */}
              <li><a href="https://www.facebook.com/goteborgsuniversitet" target="_blank" className={classes.text}>Facebook</a></li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4} justify="flex-start">
            <Typography variant="h5" className={classes.text} >USEFUL LINKS</Typography>
            <ul className="footer-ul">
              {/* eslint-disable-next-line */}
              <li><a href="https://fn.se/globala-malen-for-hallbar-utveckling/" target="_blank" className={classes.text}>Sustainable Development Goals</a></li>
              {/* eslint-disable-next-line */}
              <li><a href="https://en.wikipedia.org/wiki/Endor_(Star_Wars)" target="_blank" className={classes.text}>Endor</a></li>
              {/* eslint-disable-next-line */}
              <li><a href="https://www.wateraid.org/facts-and-statistics" target="_blank" className={classes.text}>Wateraid - facts and statistics</a></li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer