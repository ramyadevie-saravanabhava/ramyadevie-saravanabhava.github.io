import Head from 'next/head'
import Index from "../components/Index";

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Ramya's Portfolio Website</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main className="max-w-4xl mx-auto antialiased">
        <Index/>
      </main>
    </div>
  )
}