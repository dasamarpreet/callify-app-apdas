import '../styles/globals.css'
import '../styles/fonts.css'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
      <link rel="shortcut icon" href="/favicon/fav.ico" />
    </Head>
    <Script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
    <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
  <Component {...pageProps} />
  </>
}

export default MyApp
