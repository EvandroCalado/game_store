import type { AppProps } from 'next/app';
import 'semantic-ui-css/semantic.min.css';
import '../scss/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
