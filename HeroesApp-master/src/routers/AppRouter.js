import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginScreen from '../components/login/LoginScreen';

import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/login" component={LoginScreen}
                        isAuthenticated={user.logged} />
                    <PrivateRoute path="/" component={DashboardRoutes}
                        isAuthenticated={user.logged} />
                </Switch>
            </div>

        </Router>
    )
}
 
export default AppRouter
