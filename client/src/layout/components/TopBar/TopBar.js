import React  from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Hidden, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { SearchBar } from '../../../components';

const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: 'none'
    },
    flexGrow: {
        flexGrow: 1
    },
    signOutButton: {
        marginLeft: theme.spacing(1)
    },
    imageLogo: {
        width:100,
        height:'auto'
    }
}));

const TopBar = props => {
    const { onSearch } = props;
    const classes = useStyles();

    const handleSearch = (value) => {
        onSearch(value)
    }

    return (
        <AppBar
            className={classes.root}
        >
            <Toolbar>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <RouterLink
                        to="/"
                    >
                        <img
                            alt="Logo"
                            className={classes.imageLogo}
                            src="/images/logo.svg"
                        />
                    </RouterLink>
                    <SearchBar
                        onSearch={handleSearch}
                    />
                    <Hidden
                        xsDown
                    >
                        <span/>
                    </Hidden>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

TopBar.propTypes = {
    onSearch: PropTypes.func
};

export default TopBar;
