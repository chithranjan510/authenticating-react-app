import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import tokenIdContext from '../../store/tokenId-context';

const MainNavigation = () => {

  const tokenIdCtx = useContext(tokenIdContext);
  let isTokenId = false;


  if(tokenIdCtx.tokenId.length > 0) {
    isTokenId = true;
  }
  else {
    isTokenId = false;
  } 

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            {!isTokenId && <Link to='/auth'>Login</Link>}
          </li>
          <li>
            {isTokenId && <Link to='/profile'>Profile</Link>}
          </li>
          <li>
            {isTokenId && <button>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
