import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',
        height: '100%',
        visibility: 'hidden'
    }
}))
/**
 * Hides children component(s) while keeping the space in the page. In Mobile views, elements that are fading in, seem to be appearing out of nowhere, thus
 * taking space and shifting elements. If we wrap element in FakeEmpty, we keep its dimensions on the page, thus it just fades in.
 */
const FakeEmpty = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {children}
        </div>
    )
}

export default FakeEmpty;