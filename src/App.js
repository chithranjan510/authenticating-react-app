import React, { useContext } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import tokenIdContext from './store/tokenId-context';

function App() {
  const tokenIdCtx = useContext(tokenIdContext);

    return (
      <Layout>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>

          <Route path='/auth'>
            {tokenIdCtx.isLoggedIn && <Redirect to='/profile' />}
            <AuthPage />
          </Route>

          <Route path='/profile'>{tokenIdCtx.isLoggedIn && <UserProfile />}</Route>
        </Switch>
      </Layout>
    );
}

export default App;
