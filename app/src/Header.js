import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

const Header = props => {
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const menuItems = [
    {
      key: 1,
      title: "Home",
      pageURL: "/"
    },
    {
      key: 2,
      title: "About",
      pageURL: "/about"
    },
    {
      key: 3,
      title: "News",
      pageURL: "/news"
    }
  ]

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };

  const NavLinks = () => (
    <>
      {menuItems.map(menuItem => {
        const { key, title, pageURL } = menuItem;
        return (
          <Button
            key={key.toString()}
            variant="outlined"
            onClick={() => handleButtonClick(pageURL)}
            className={classes.button}
            color="inherit">
            {title}
          </Button>
        );
      })}
    </>
  )

  const MobileNav = () => (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={open}
        onClose={() => setAnchorEl(null)}>
        {menuItems.map(menuItem => {
          const { key, title, pageURL } = menuItem;
          return (
            <MenuItem
              key={key.toString()}
              onClick={() => handleMenuClick(pageURL)}>
              {title}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  )

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Header
        </Typography>
        {isMobile ? (MobileNav()) : (NavLinks())}
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(Header);