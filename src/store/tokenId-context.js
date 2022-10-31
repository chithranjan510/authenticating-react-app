import React, { useState } from 'react';

const tokenIdContext = React.createContext({
  tokenId: null,
  isLoggedIn: false,
  addTokenId: () => {},
  removeTokenId: () => {},
});

export const TokenIdContextProvider = (props) => {
  const [isTokenId, setIsTokenId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addtokenId = (idToken) => {
    setIsLoggedIn(true);
    setIsTokenId(idToken);
    // console.log('token id context >>>>>>>>>>>>', isTokenId);
  };

  const removeTokenId = () => {
    setIsLoggedIn(false);
    setIsTokenId(null);
  };

  return (
    <tokenIdContext.Provider
      value={{
        tokenId: isTokenId,
        isLoggedIn: isLoggedIn,
        addTokenId: addtokenId,
        removeTokenId: removeTokenId,
      }}
    >
      {props.children}
    </tokenIdContext.Provider>
  );
};

export default tokenIdContext;
