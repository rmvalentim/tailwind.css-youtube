import Youtube from '@/components/Youtube'
import Head from 'next/head'

export default function Home() {

  return (
    <>
      <Head>
        <title>Youtube</title>
        <meta name="Youtube interface clone" content="Created with next.js and tailwind.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Youtube />
    </>
  )
}
