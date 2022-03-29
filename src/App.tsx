import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { DetailPage } from '@/pages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <BrowserRouter>
        <Switch>
          <Route exact path="/summoners/:summonerName" component={DetailPage} />
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  </QueryClientProvider>
);

export default App;
