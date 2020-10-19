import React, {useRef, useState, useLayoutEffect} from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: theme.spacing(2),
  },

  black:{
    color: 'Black',
  },

  white:{
    color: 'White',
  },

  text:{
    flexGrow: 1,
  },

  appBarTransparent:{
    backgroundColor:'rgba(255,255,255,0)',
    boxShadow:'none',
  },

  appBarWhite:{
    backgroundColor:'rgba(255,255,255)',
    boxShadow:'5px',
  },
}));



const NavLinks = props => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { menuItems, handleButtonClick, scrolledPastHero } = props;
  let className = classes.button 
  if(scrolledPastHero){
    className += ' ' + classes.black
  }
  else{
    className += ' ' + classes.white
  }

  return (
    <>
      {menuItems.map(menuItem => {
        const { key, title, pageURL} = menuItem;
        return (
          <Button
            key={key.toString()}
            variant="outlined"
            onClick={() => handleButtonClick(pageURL)}
            className={className}>
            {title}
          </Button>
        );
      })}
    </>
  );
}

const MobileNav = props => {

  const { menuItems, handleMenuClickCallback, scrolledPastHero } = props;
  const theme = useTheme();
  const classes = useStyles(theme);
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
        className={scrolledPastHero ? classes.black : classes.white}
        edge="start"
        aria-label="menu"
        onClick={handleMenu}
      >
        <MenuIcon/>
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

const Landingheader = props => {
  const {menuItems, heroHeight} = props;
  const theme = useTheme();
  const classes = useStyles(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const history = useHistory();

  const navRef = useRef(null)
    const [navHeight, setNavHeight] = useState(0)

    useLayoutEffect(() => {
        setNavHeight(navRef.current.clientHeight);
      }, []);

  const [scrolledPastHero, setScrolledPastHero] = useState(false)

    useLayoutEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > (heroHeight-navHeight)
            console.log('Header-heroheight: ', heroHeight)
            if (show) {
              setScrolledPastHero(true)
            } else {
              setScrolledPastHero(false)
            }
        
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
        
    }, [heroHeight,navHeight])

    

  


  const handleMenuClick = pageURL => {
    history.push(pageURL);
  };

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };
  
  let className = classes.text 
  if(scrolledPastHero){
    className += ' ' + classes.black
  }
  else{
    className += ' ' + classes.white
  }
  return (
    <AppBar className = {scrolledPastHero ? classes.appBarWhite: classes.appBarTransparent} position='fixed' ref={navRef} data-testid="landingheader">
      <Toolbar>
        <Typography variant="h6" className = {className}>
          Agile Endor
        </Typography>
        {isMobile ? (
          <MobileNav
            scrolledPastHero = {scrolledPastHero}
            menuItems={menuItems}
            handleMenuClickCallback={handleMenuClick}
          />
        ) : (
            <NavLinks
              scrolledPastHero = {scrolledPastHero}
              menuItems={menuItems}
              handleButtonClick={handleButtonClick}
            />
          )}
      </Toolbar>
    </AppBar>
  );
}

export default Landingheader;
