import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import { Fade } from '@material-ui/core';

import { Visibility } from 'components';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        padding: 30,
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            paddingLeft: 130,
        }
    },
    header: {
        display: 'table',
        fontSize: 20,
        width: 'auto',
        fontWeight: 700,
        letterSpacing: 2,
        borderBottom: '1px solid gold',

        [theme.breakpoints.up('sm')]: {
            borderBottom: 'none',
            borderLeft: '1px solid gold',
            display: 'inline-block',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
        }
    },
    languages: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 5,
        [theme.breakpoints.up('sm')]: {
            paddingTop: 0,
            paddingLeft: 5
        }
    }
}));

const Languages = () => {
    const classes = useStyles();

    return (
        <Visibility >
            <Fade in={true} timeout={1500}>
                <Grid item xs={12} className={classes.root} >
                    <div className={classes.header}>
                        /03/Languages
                    </div>
                    <Grid item className={classes.languages}>
                        <div>English</div>
                        <div>Russian</div>
                        <div>Ukrainian</div>
                    </Grid>
                </Grid>
            </Fade>
        </Visibility>
    )
};  

export default Languages;