import React, { ReactElement, Suspense, lazy } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

// theme
import theme from 'assets/theme/index';
import { ThemeProvider } from '@material-ui/core/styles';

// utils
import history from 'utils/history';

// components
import Header from 'components/common/Header';

// pages
const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Signup = lazy(() => import('pages/Signup'));

const IndexRouter: React.FC = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Router history={history}>
        {/* Suspense는 페이지가 랜더링되기 전 event를 설정합니다. */}
        <Suspense fallback={<CircularProgress />}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default IndexRouter;
