import React, {useRef, useLayoutEffect } from 'react';
import './heropage.css'
import backgroundimage from './water_background.jpg';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Header from '../header/Header';

const useStyles = makeStyles (() => ({
image:{
    backgroundImage: `url(${backgroundimage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100vh',
},
mainGrid:{
    height: '80vh',
    display: 'flex',
    justify:'center',
    direction: 'row',
    alignItems: 'flex-end',
},
leftText:{
    fontSize: 'min(max(18px, 4vw), 42px)',
    textAlign: 'left',
    color: 'white',
    fontFamily: 'GT America Mono",Arial,sans-serif',
},
rightText:{
    fontSize: 'min(max(18px, 4vw), 42px)',
    textAlign: 'left',
    color: 'white',
    fontFamily: 'Aeonik,Arial,sans-serif',
},
textContainer:{

}




}));

const HeroPage = (props) => {


    const {onHeightChanged} = props;
    Header.color = "black";
    const classes = useStyles();
    const heroRef = useRef(null);
    

    
    useLayoutEffect(() => {
        window.addEventListener('resize', onHeightChanged);
        onHeightChanged(heroRef.current.clientHeight);
        return () => window.removeEventListener('resize',onHeightChanged);
      }, [onHeightChanged]);

    return(

        <div className={classes.image} ref={heroRef} data-testid="heropage">
            <Grid container className={classes.mainGrid}>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item sm={1}></Grid>
                        <Grid item xs={6} sm={3}>
                            <div className={classes.leftText}>
                            Vårt uppdrag:
                            </div>
                        </Grid>
                        <Grid container item xs={12} sm={6}>
                            <div className={classes.rightText}>
                                <Grid item xs={12}>Vatten är dyrbart. Vi dedikerar oss för detta syfte.</Grid>
                                <Grid item xs={12}>Vi ger människor glädje.</Grid>
                                <Grid item xs={12}>Vi är ENDOR.</Grid>
                            </div>
                        </Grid>
                    </Grid>
            </Grid>
        </div>
    )
}

export default HeroPage;