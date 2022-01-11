import { Button } from '@mui/material';
import StyledButton from '../frontend/src/components/StyledButton';

import { NextPageContext } from 'next';
import axios from 'axios';

interface SSRPageProps {}

const SSRPage = function SSRPageComponent<ssrpageProps>({}) {
  return (
    <>
      <Button variant="contained" color="primary">
        Sup ssr bruh
      </Button>
      <StyledButton />
    </>
  );
};

export const getServerSideProps = () => {
  return {
    props: {},
  };
};

export default SSRPage;
