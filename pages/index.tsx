import { useEffect } from 'react';
import { NextPageContext } from 'next';
import axios from 'axios';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SignInComponent from '../frontend/src/views/signInPage/SignInPage';

import Marquee from 'react-fast-marquee';
import StyledButton from '../frontend/src/components/StyledButton';
import NavBar from '../frontend/src/views/app/NavBar';
import styled from 'styled-components';
interface indexProps { }

/** 
 const NavContainer = styled.nav`
 display: flex;
 height: 100px;
 background-color: green;
 `;
 * 
 */

const NavContainer = styled.nav`
overflow: hidden;
position: relative;
display: flex;
flex: 1;
background-color: pink;
`;

const NavItems = styled.li`
display: block;
top: 0;
left: 0;
flex: 1;
background-color: teal;
`;

const ProductContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
height: 60vh;
`;

const ProductHalfContainer = styled.div`
display: flex;
flex-direction: column;
flex: 1;
`;

const MarqueeContainer = styled.section`
display:flex;
height: 50vh;
`;

const ProductContainer1 = styled.section`
background-color: red;
flex: 1;
padding: 10px;

`;
const ProductMiniContainer = styled.section`
background-color: blue;
padding: 10px;
flex: 1 0;
`;

const ProductMiniContainer2 = styled.section`
background-color: goldenrod;
padding: 10px;
flex: 1 0;
`;

const ProductContainer3 = styled.section`
background-color: goldenrod;
padding: 10px;
`;

const FooterContainer = styled.footer`
// position: absolute;
// bottom: 0;
background-color: purple;
`;

const index = function indexComponent<indexProps>({ }) {
  useEffect(() => {
    console.log('its working!');
  }, []);

  const text = `you're at the / page sdasfsda!`;

  return (
    <>
      <NavContainer>
        <NavItems>w</NavItems>
        <NavItems>o</NavItems>
        <NavItems>o</NavItems>
        <NavItems>t</NavItems>
      </NavContainer>
      <main>
        <ProductContainer>
          <ProductHalfContainer>
            <ProductContainer1>prod1</ProductContainer1>
          </ProductHalfContainer>
          <ProductHalfContainer>
            <ProductMiniContainer>prod2</ProductMiniContainer>
            <ProductMiniContainer2>prod3</ProductMiniContainer2>
          </ProductHalfContainer>
        </ProductContainer>
        <MarqueeContainer>
          <Marquee>
            yay
          </Marquee>
        </MarqueeContainer>
        <ProductContainer>
          <ProductHalfContainer>
            <ProductMiniContainer>prod2</ProductMiniContainer>
            <ProductMiniContainer2>prod3</ProductMiniContainer2>
          </ProductHalfContainer>
          <ProductHalfContainer>
            <ProductContainer1>prod1</ProductContainer1>
          </ProductHalfContainer>
        </ProductContainer>
      </main>
      <FooterContainer>
        sdfsf
      </FooterContainer>
    </>
  );
};

export default index;
