import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Pagination as PaginationMui } from '@material-ui/lab';
import { COMPONENT_PAGINATION } from '../../constants/componentIdentifiers';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    paper: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        padding: 10
    }
}));

const Pagination = (props) => {
    const classes = useStyles();
    const { currentPage, totalPages, onSelectPage } = props;

    const handleChange = (event, page) => {
        event.preventDefault()
        onSelectPage(page)
    }

    return (
        <Grid
            container
            className={classes.root}
        >
            <Grid
                item xs={12}
            >
                <Paper
                    className={classes.paper}
                >
                    <PaginationMui
                        data-testid={COMPONENT_PAGINATION}
                        page={currentPage}
                        count={totalPages}
                        color={'primary'}
                        onChange={handleChange}
                    />
                </Paper>
            </Grid>
        </Grid>

    )
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onSelectPage: PropTypes.func.isRequired,
};

export default Pagination;
