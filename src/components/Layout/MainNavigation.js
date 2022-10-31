import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import tokenIdContext from '../../store/tokenId-context';

const MainNavigation = () => {

  const tokenIdCtx = useContext(tokenIdContext);


  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            {!tokenIdCtx.isLoggedIn && <Link to='/auth'>Login</Link>}
          </li>
          <li>
            {tokenIdCtx.isLoggedIn && <Link to='/profile'>Profile</Link>}
          </li>
          <li>
            {tokenIdCtx.isLoggedIn && <button>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
