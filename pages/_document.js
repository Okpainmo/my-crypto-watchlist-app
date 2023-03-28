import { Head, Html, Main, NextScript } from 'next/document';

// import { AppConfig } from '@/utils/AppConfig';

/* The NextJS docs recommends to avoid adding web fonts to next/head but to do so in a 
 custom document instead. */

function Document() {
  return (
    <Html
    // lang={AppConfig.locale}
    >
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
