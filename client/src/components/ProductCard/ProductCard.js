import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {getFormattedPrice, getFormatterPercent, formatterUrlImage} from '../../utils';
import { COMPONENT_PRODUCT_CARD } from '../../constants/componentIdentifiers';

const useStyles = makeStyles((theme) => ({
    media: {
        height:150,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
    addButton: {
        textTransform: 'none',
    },
    priceContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 'auto',
        height:'80%',
    },
    discount: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:12
    },
    containerDiscount: {
        backgroundColor: '#FF3739',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        padding: '0 5px 0 5px',
        borderRadius: '25%/50%',
        marginLeft: 5
    },
    originalPrice: {
        textDecoration: 'line-through'
    },
    priceTitle: {
        fontWeight: 'bold'
    }
}));

const ProductCard = (props) => {
    const classes = useStyles();
    const { product } = props;
    const { image, price, discount, brand, description } = product;

    return (
        <Card
            data-testid={COMPONENT_PRODUCT_CARD}
        >
            <CardMedia
                title="Paella dish"
                className={classes.media}
                children={
                    <img
                        alt={''}
                        className={classes.image}
                        src={formatterUrlImage(image)}
                    />
                }
            />
            <CardContent>
                <Typography>
                    {brand}
                </Typography>
                <Typography>
                    {description}
                </Typography>
                <div
                    className={classes.priceContainer}
                >
                    <Typography
                        className={classes.priceTitle}
                    >
                        {getFormattedPrice(price)}
                    </Typography>
                    {discount > 0 &&
                    <div
                        className={classes.containerDiscount}
                    >
                        <Typography
                            className={classes.discount}
                        >
                            {getFormatterPercent(discount)}
                        </Typography>
                    </div>}
                </div>
                {discount > 0 &&
                <Typography className={classes.originalPrice}>
                    {getFormattedPrice(price * discount)}
                </Typography>}

            </CardContent>
        </Card>
    )
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductCard;
