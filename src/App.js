import React, { useContext } from 'react';
import { Switch, Route} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import tokenIdContext from './store/tokenId-context';

function App() {
  const tokenIdCtx = useContext(tokenIdContext);
  let isTokenId = false;

  if (tokenIdCtx.tokenId.length > 0) {
    isTokenId = true;
  }
  else {
    isTokenId = false;
  }

    return (
      <Layout>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>

          <Route path='/auth'>
            <AuthPage />
          </Route>

          <Route path='/profile'>{isTokenId && <UserProfile />}</Route>
        </Switch>
      </Layout>
    );
}

export default App;
