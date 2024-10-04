import '~/styles/globals.css';

import type {AppProps} from 'next/app';
import Container from '~/components/Container';
import Footer from '~/components/Footer';

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Container>
        <div className="row-span-5  ">
          <Component {...pageProps} />
        </div>
        <div className="row-span-1">
          <Footer />
        </div>
      </Container>
    </>
  );
}
