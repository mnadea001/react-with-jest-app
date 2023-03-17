import Head from 'next/head'

import styles from '@/pages/index.module.css'
import { useState } from 'react';

export default function Home() {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
const add = () => {
  setResult(parseInt(number1) + parseInt(number2))
};
const substract = () => {
  setResult(parseInt(number1) - parseInt(number2))
};
const multiply = () => {
  setResult(parseInt(number1) * parseInt(number2))
};
const divide = () => {
  setResult(parseInt(number1) / parseInt(number2))
};
const [result, setResult] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.result} data-testid="result">RESULT = {result}</div>
        <input type="number" className={styles.input} data-testid={number1} value={number1} onChange={(e) => setNumber1(e.target.value)} />

        <input type="number" className={styles.input} data-testid={number2} value={number2} onChange={(e) => setNumber2(e.target.value)} />
        <button onClick={add} className={styles.button} data-testid="add">ADD</button>
        <button onClick={substract} className={styles.button} data-testid="substract">SUBSTRACT</button>
        <button onClick={multiply} className={styles.button} data-testid="multiply">MULTIPLY</button>
        <button onClick={divide} className={styles.button} data-testid="divide">DIVIDE</button>
      </main>
    </div>
  )
}
