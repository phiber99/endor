import React from "react"
import './footer.css'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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
      <Grid
        container
        spacing={2}
        justify="center">
        <Grid item xs={10} md={3}>
          <Typography variant="h5" className={classes.text} >Navigate</Typography>
          <ul className="footer-ul">
            {/* eslint-disable-next-line */}
            <li><a href="#" className={classes.text}>Home</a></li>
            {/* eslint-disable-next-line */}
            <li><a href="#" className={classes.text}>About</a></li>
            {/* eslint-disable-next-line */}
            <li><a href="#" className={classes.text}>Facebook</a></li>
          </ul>
        </Grid>
        <Grid item xs={10} md={3}>
          <Typography variant="h5" className={classes.text}>Useful links</Typography>
          <ul className="footer-ul">
            {/* eslint-disable-next-line */}
            <li><a href="#" className={classes.text}>Something 1</a></li>
            {/* eslint-disable-next-line */}
            <li><a href="#" className={classes.text}>Something 2</a></li>
            {/* eslint-disable-next-line */}
            <li><a href="#" className={classes.text}>Something 3</a></li>
          </ul>
        </Grid>
        <Grid item xs={10} md={3}>
          <Typography variant="h5" className={classes.text}>Useful links 2</Typography>
          <ul className="footer-ul">
            {/* eslint-disable-next-line */}
            <li><a href="#" className={classes.text}>Something 1</a></li>
            {/* eslint-disable-next-line */}
            <li><a href="#" className={classes.text}>Something 2</a></li>
            {/* eslint-disable-next-line */}
            <li><a href="#" className={classes.text}>Something 3</a></li>
          </ul>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer