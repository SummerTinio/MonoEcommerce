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

const padding = '0.7rem';

const ZappConceptsLogoContainer = styled.div`
  background-color: yellow;
  width: 6rem;
`;

const ProductNameContainer = styled.div`
padding: ${padding};
width: 10vw;
min-width: min-content;
background-color: white;
`;

const ShortText = styled.p`
color: blue;
`;

const PriceContainer = styled.div`
padding: ${padding};
width: 17%;
min-width: min-content;
background-color:yellowgreen;
`;

const PriceText = styled.p`
color: red;
`;

const MarqueeProductNameContainer = styled.div`
padding: ${padding};
width: 10vw;
min-width: min-content;
background-color: blue;
`;

const MarqueePriceNameContainer = styled.div`
padding: ${padding};
width: 10vw;
min-width: min-content;
background-color: white;
`;

const MarqueeShortText = styled.p`
color: blue;
`;

const MarqueePriceContainer = styled.div`
padding: ${padding};
width: 100%;
min-width: min-content;
background-color:yellowgreen;
`;

const MarqueePriceText = styled.p`
color: red;
`;


const NavContainer = styled.nav`
  overflow: hidden;
  position: relative;
  display: flex;
  flex: 1;
  background-color: pink;
  vertical-align: baseline;
  align-items: baseline;
  justify-content: space-between;
  padding: ${padding};
`;

const NavItems = styled.span`
  
  width: 2rem;
  background-color: orange;
  top: 0;
  left: 0;
  flex: 1;
  background-color: teal;
`;

const MarqueeItemContainer = styled.div`
display: flex;
background-color: lightblue;
flex-wrap: column;
height: 80%;
width: 40%;
max-height: 80%;
max-width: 80%;
`;

const MarqueeItem = styled.div`
background-color:pink;

`;

const ThreeIconContainer = styled.div`
display: flex;
align-items: baseline;
justify-content: space-between;
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
  display: flex;
  height: 50vh;
`;

const MarqueeProductImage = styled.img`
background-color: green;
`;

const ProductContainer1 = styled.section`
  background-color: red;
  flex: 1;
`;
const ProductMiniContainer = styled.section`
  background-color: blue;
  flex: 1 0;
  height: min-content;
`;

const ProductMiniContainer2 = styled.section`
  background-color: goldenrod;
  flex: 1 0;
  height: min-content;
`;

const ProductContainer3 = styled.section`
  background-color: goldenrod;
  padding: ${padding};
`;

const ProductImage = styled.img`
background-color: green;
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
        <NavItems>
          <ZappConceptsLogoContainer>
            ZappConcepts
          </ZappConceptsLogoContainer>
        </NavItems>
        <ThreeIconContainer>
          <NavItems>o</NavItems>
          <NavItems>o</NavItems>
          <NavItems>t</NavItems>
        </ThreeIconContainer>
      </NavContainer>
      <main>
        <ProductContainer>
          <ProductHalfContainer>
            <ProductMiniContainer>
              <ProductNameContainer>
                <ShortText>Yay</ShortText>
              </ProductNameContainer>
              <PriceContainer>
                <PriceText>$ 20</PriceText>
              </PriceContainer>
              <ProductImage />
            </ProductMiniContainer>
          </ProductHalfContainer>
          <ProductHalfContainer>
            <ProductMiniContainer>
              <ProductNameContainer>
                <ShortText>Yay</ShortText>
              </ProductNameContainer>
              <PriceContainer>
                <PriceText>$ 20</PriceText>
              </PriceContainer>
              <ProductImage />
            </ProductMiniContainer>
            <ProductMiniContainer2>
              <ProductNameContainer>
                <ShortText>Yay</ShortText>
              </ProductNameContainer>
              <PriceContainer>
                <PriceText>$ 20</PriceText>
              </PriceContainer>
              <ProductImage />
            </ProductMiniContainer2>
          </ProductHalfContainer>
        </ProductContainer>
        <MarqueeContainer>
          <Marquee>
            <MarqueeItemContainer>
              <MarqueeProductNameContainer>
                <ShortText>Yay</ShortText>
              </MarqueeProductNameContainer>
              <MarqueePriceContainer>
                <MarqueePriceText>$ 20</MarqueePriceText>
              </MarqueePriceContainer>
              <MarqueeProductImage />
              {/** 
              <MarqueeItem>
              </MarqueeItem>
               */}
            </MarqueeItemContainer>
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
      <FooterContainer>sdfsf</FooterContainer>
    </>
  );
};

export default index;
