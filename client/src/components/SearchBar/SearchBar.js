import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CloseIcon from '@material-ui/icons/Close';
import { COMPONENT_SEARCH_BAR } from '../../constants/componentIdentifiers'
import { PLACEHOLDER_SEARCH_BAR } from '../../constants/compoenetText'

const useStyles = makeStyles((theme) => ({
    root : {
        justifyContent: 'center',
        borderRadius: 20,
    },
    input: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        height:40
    },
    iconButton: {
        height: 20,
        width: 20,
        marginRight: theme.spacing(1)
    },
    div:{
        flexDirection: 'row'
    }
}));

const SearchBar = (props) => {

    const classes = useStyles();
    const { onSearch } = props;
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchValue);
        handleReset()
    };

    const handleChange = (event) => {
        setSearchValue(event.target.value)
    };

    const handleReset = () => {
        setSearchValue('');
    };

    return (
        <Paper
            component="form"
            className={classes.root}
            onSubmit={handleSubmit}
        >
            <div
                className={classes.div}
            >
                <InputBase
                    data-testid={COMPONENT_SEARCH_BAR}
                    className={classes.input}
                    placeholder={PLACEHOLDER_SEARCH_BAR}
                    value={searchValue}
                    onChange={handleChange}

                />
                {searchValue.length > 0 &&
                <IconButton
                    className={classes.iconButton}
                    onClick={handleReset}
                >
                    <CloseIcon/>
                </IconButton>}
            </div>
        </Paper>
    )
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
