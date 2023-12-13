import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import App from './App.tsx';
import { client } from './api/client.ts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RecoilRoot>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </RecoilRoot>
  </BrowserRouter>
);
