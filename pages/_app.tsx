import '../styles/globals.css';
import { WagmiProvider } from 'wagmi';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider>
      <Component {...pageProps} />
    </WagmiProvider>
  );
}

export default MyApp;
