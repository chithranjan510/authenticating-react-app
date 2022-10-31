import React, { useState } from 'react';

const tokenIdContext = React.createContext({
  tokenId: '',
  addTokenId: () => {},
  removeTokenId: () => {},
});

export const TokenIdContextProvider = (props) => {
  const [isTokenId, setIsTokenId] = useState('');

  const addtokenId = (idToken) => {
    setIsTokenId(idToken);
    // console.log('token id context >>>>>>>>>>>>', isTokenId);
  };

  const removeTokenId = () => {
    setIsTokenId([]);
  };

  return (
    <tokenIdContext.Provider
      value={{
        tokenId: isTokenId,
        addTokenId: addtokenId,
        removeTokenId: removeTokenId,
      }}
    >
      {props.children}
    </tokenIdContext.Provider>
  );
};

export default tokenIdContext;
