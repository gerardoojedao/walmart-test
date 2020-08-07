import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Pagination, ProductList, Loading, EmptyResultList } from '../../components';
import { getAllProducts } from '../../actions';
import { useHistory } from "react-router-dom";
import queryString from 'query-string'

const useStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    content: {
        paddingTop: 150,
        textAlign: 'center'
    },
    image: {
        marginTop: 50,
        display: 'inline-block',
        maxWidth: '100%',
    }
}));

const NotFound = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const [query, setQuery] = useState('');
    const { products, pages, page, isLoading } = useSelector((state) => state.product.productsList);

    useEffect(() => {

        const searchParams = queryString.parse(history.location.search)

        let payload = {}
        if (searchParams.page !== undefined) {
            payload.page = parseInt(searchParams.page)
        }
        if (searchParams.query !== undefined) {
            payload.query = searchParams.query
            setQuery(searchParams.query)
        }

        dispatch(getAllProducts(payload))

    }, [history.location, dispatch])

    const handleChangePage = (newPage) => {

        if (newPage === page) {
            return
        }

        history.push({
            pathname: '/search',
            search: `?query=${query}&page=${newPage}`
        })

    };

    return ( isLoading ?
        <Loading/> :
        <div className={classes.root}>
            {products.length === 0 ?
                <EmptyResultList subtitle={query}/> :
                <div>
                    <ProductList
                        products={products}
                        query={query}
                    />
                    <Pagination
                        currentPage={page}
                        totalPages={pages}
                        onSelectPage={handleChangePage}
                    />
                </div>
            }
        </div>
    );
};

export default NotFound;
