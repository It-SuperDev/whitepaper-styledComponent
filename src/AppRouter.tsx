import { Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeLayout from './layout/homeLayout';

import HomePage from './pages/home/index';

const Authmiddleware = (props: any) => {
    const { component: Component, layout, ...rest } = props;
    return (
        <Route
            {...rest}
            render={(props: any) => {
                if (layout === 'HomeLayout') {
                    return (
                        <HomeLayout>
                            <Suspense fallback={<></>}>
                                <Component {...props} />
                            </Suspense>
                        </HomeLayout>
                    );
                } else {
                    <HomeLayout>
                        <Suspense fallback={<></>}>
                            <Component {...props} />
                        </Suspense>
                    </HomeLayout>;
                }
            }}
        />
    );
};

Authmiddleware.propTypes = {
    component: PropTypes.any,
    layout: PropTypes.string,
    path: PropTypes.any,
    exact: PropTypes.any
};

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Authmiddleware path="*" layout="HomeLayout" component={HomePage} exact />
            </Switch>
        </Router>
    );
};

export default AppRouter;
