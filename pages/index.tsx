import Head from 'next/head'
import Image from 'next/image'

import styles from '@/pages/index.module.css'
import { useState } from 'react';

export default function Home() {

  const [someValue, setSomeValue] = useState(0);

  setTimeout( () => {
    console.log('On est la');
    setSomeValue(parseInt(Math.random()*100));
  }, 5000);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
<div className={styles.title} data-testid="someValue">
  someValue: {someValue}
</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
