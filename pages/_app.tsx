import '../styles/globals.css';
import { WagmiProvider } from 'wagmi';
import type { AppProps } from 'next/app';
import { connectors } from '../wagmi.connector';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider autoConnect connectors={connectors}>
      <Component {...pageProps} />
    </WagmiProvider>
  );
}

export default MyApp;
