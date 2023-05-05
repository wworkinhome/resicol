import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        ></link>
        <Script id='my-script' src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js'>   </Script>
        <Script id='my-script' src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js'>   </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
