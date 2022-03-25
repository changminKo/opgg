import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { HelloWorld } from '@/components';
import logo from './logo.svg';
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <div className="App">
          <HelloWorld />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit
              {' '}
              <code>src/App.tsx</code>
              {' '}
              and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
