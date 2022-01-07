import type { NextPage, NextPageContext, InferGetStaticPropsType } from 'next';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

import axios from 'axios';

interface HomeProps {}

const Home = function HomeComponent<HomeProps>({}) {
  return (
    <>
      <h1> you're home !</h1>
    </>
  );
};

export default Home;
