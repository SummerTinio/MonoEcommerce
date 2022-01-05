import type { NextPage } from 'next';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

export async function getStaticProps() {
}

const Home: NextPage = () => {
  useEffect(() => {
    console.log('its working!');
  }, []);

  return (
    <h1>Hello!</h1>
  );
};

export default Home;
