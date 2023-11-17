import '@layouts/App/globals.css';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { StoreProvider } from '@context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Toaster } from 'react-hot-toast';

const App: FC<AppProps> = function ({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" reverseOrder={false} />
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
