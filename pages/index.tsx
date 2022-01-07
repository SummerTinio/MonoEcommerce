import type { NextPage, NextPageContext, InferGetStaticPropsType } from 'next';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

import getAllProducts from '../controller/get-all-products';

export const getStaticProps = async () => {
  const products = await getAllProducts();
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
};

const Home = function HomeComponent({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  useEffect(() => {
    console.log('its working!');
  }, []);

  return (
    <ul>{JSON.stringify(products)}</ul>
  );
};

export default Home;
