import Head from 'next/head'

import styles from '@/pages/index.module.css'
import { useState } from 'react';

export default function Home() {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <input type="number" className={styles.input} data-testid={number1} value={number1} onChange={(e) => setNumber1(e.target.value)} />

        <input type="number" className={styles.input} data-testid={number2} value={number2} onChange={(e) => setNumber2(e.target.value)} />
        <button>Calculer</button>
      </main>
    </div>
  )
}
