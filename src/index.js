import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '../src/components/App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import './index.css';



const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}> 
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  <ReactQueryDevtools />
  </QueryClientProvider>
   
  </React.StrictMode>
);


