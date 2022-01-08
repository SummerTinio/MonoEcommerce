import { useEffect } from 'react';
import { NextPageContext } from 'next';
import axios from 'axios';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SignInComponent from '../frontend/src/layouts/SigninComponent';

import StyledButton from '../frontend/src/components/presentational/StyledButton';

interface indexProps {

}

const index = function indexComponent<indexProps>({ }) {
  useEffect(() => {
    console.log('its working!');
  }, []);

  const text = `you're at the / page!`

  return (
    <h1>
      {text}
      <StyledButton />
    </h1>
  );
}

export default index;