import React from 'react';
import { Paper, Grid, CircularProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import { COMPONENT_LOADING } from '../../constants/componentIdentifiers'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
    },
    paper: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        padding: 10
    },
    progress: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
    }
}));

const Loading = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            className={classes.root}
            data-testid={COMPONENT_LOADING}
        >
            <Grid
                item
                xs={12}
            >
                <Paper
                    className={classes.paper}
                >
                    <CircularProgress
                        className={classes.progress}
                    />
                </Paper>
            </Grid>
        </Grid>

    )
};

export default Loading;
