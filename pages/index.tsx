import type { NextPage, NextPageContext, InferGetStaticPropsType } from 'next';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

export const getStaticProps = async () => { // must be async
  return {
    props: {
      products: [3, 2, 1]
    },
    revalidate: 4 * 60 * 60
  };
};

const Home = function HomeComponent({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {

  useEffect(() => {
    console.log('its working!');
  }, []);

  return (
    <h1>
      {products}
    </h1>
  );
};

export default Home;
