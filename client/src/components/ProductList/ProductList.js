import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ProductCard } from './..';
import { COMPONENT_PRODUCT_LIST } from '../../constants/componentIdentifiers';
import { DEFAULT_RESULT_TITLE } from '../../constants/compoenetText';

const useStyles = makeStyles((theme) => ({
    containerTitle: {
        flexDirection: 'row',
        display:'flex'
    },
    titleSearch: {
        fontWeight: 'bold'
    },
    valueSearch: {
        marginLeft: 3
    }
}));

const ProductList = (props) => {

    const { products, query } = props;
    const classes = useStyles()
    return (
        <Grid
            container
            spacing={2}
            data-testid={COMPONENT_PRODUCT_LIST}
        >
            {query &&
            <Grid
                item
                xs={12}
            >
                <div
                    className={classes.containerTitle}
                >
                    <Typography
                        className={classes.titleSearch}
                    >
                        {DEFAULT_RESULT_TITLE}
                    </Typography>
                    <Typography
                        className={classes.valueSearch}
                    >
                        {query}
                    </Typography>
                </div>
            </Grid>}
            <Grid
                item
                xs={12}
            >
                <Grid
                    container
                    justify="center"
                    spacing={3}
                >
                    {products.map((product, index) => (
                        <Grid
                            item
                            xs={12}
                            md={3}
                            sm={6}
                            key={index}
                        >
                            <ProductCard
                                key={index}
                                product={product}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
};

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    query: PropTypes.string
}

export default ProductList;
