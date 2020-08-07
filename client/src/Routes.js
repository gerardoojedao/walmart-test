import React from "react";
import { Switch, Redirect } from 'react-router-dom';
import { RouteWithLayout } from './components';
import { ProductList } from './containers';
import { Layout } from './layout';

const Routes = () => {
    return (
        <Switch>
            <Redirect
                exact
                from="/"
                to="/search"
            />
            <RouteWithLayout
                component={ProductList}
                layout={Layout}
                path={"/search"}
            />
        </Switch>
    );
};

export default Routes;
