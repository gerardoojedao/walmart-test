import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { TopBar } from './components';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 56,
        height: '100%',
        [theme.breakpoints.up('sm')]: {
            paddingTop: 64
        },
    },
    shiftContent: {
        paddingLeft: 0
    },
    content: {
        height: '100%',

    }
}));

const Main = props => {
    const { children } = props;

    const classes = useStyles();
    const history = useHistory();

    const handleSearch = (value) => {

        history.push({
            pathname: '/search',
            search: `?query=${value}`
        })
    }

    return (
        <div
            className={classes.root}
        >
            <TopBar
                onSearch={handleSearch}
            />
            <main
                className={classes.content}
            >
                {children}
            </main>
        </div>
    );
};

Main.propTypes = {
    children: PropTypes.node
};

export default Main;
