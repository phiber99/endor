import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

const NavLinks = props => {
  const { menuItems, handleButtonClick, classes } = props;

  return (
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
  );
}

const MobileNav = props => {

  const { menuItems, handleMenuClickCallback } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    handleMenuClickCallback(pageURL);
    setAnchorEl(null);
  }

  return (
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
}

const Header = props => {
  const { menuItems } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const history = useHistory();

  const handleMenuClick = pageURL => {
    history.push(pageURL);
  };

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Header
        </Typography>
        {isMobile ? (
          <MobileNav
            menuItems={menuItems}
            handleMenuClickCallback={handleMenuClick} />
        ) : (
            <NavLinks
              menuItems={menuItems}
              handleButtonClick={handleButtonClick}
              classes={classes} />
          )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
