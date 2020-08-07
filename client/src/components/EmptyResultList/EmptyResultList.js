import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { COMPONENT_EMPTY_RESULT, COMPONENT_TITLE_EMPTY_RESULT } from '../../constants/componentIdentifiers'
import { DEFAULT_TITLE_EMPTY_RESULT } from '../../constants/compoenetText'

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        display: 'flex',
        minHeight: 400,
    },
    container: {
        padding: theme.spacing(4),
    },
    title: {
        textAlign: 'center'
    }
}));

const EmptyResultList = (props) => {

    const classes = useStyles();
    const { subtitle } = props;

    return (
        <Paper
            className={classes.root}
            data-testid={COMPONENT_EMPTY_RESULT}
        >
            <Grid
                container
                spading={2}
                className={classes.container}
            >
                <Grid
                    item
                    xs={12}
                >
                    <Typography
                        variant={'h4'}
                        className={classes.title}
                        data-testid={COMPONENT_TITLE_EMPTY_RESULT}
                    >
                        {DEFAULT_TITLE_EMPTY_RESULT}
                    </Typography>
                </Grid>
                {subtitle &&
                <Grid
                    item
                    xs={12}
                >
                    <Typography
                        className={classes.title}
                    >
                        {subtitle}
                    </Typography>
                </Grid>}
            </Grid>
        </Paper>
    )
};

EmptyResultList.propTypes = {
    subtitle: PropTypes.string
};

export default EmptyResultList;
