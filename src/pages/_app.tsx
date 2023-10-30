import { AppProps } from 'next/app';
import '@fontsource/noto-sans-jp';
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
