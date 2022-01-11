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

/** @ts-ignore */
// import CaslonDoric from './../public/fonts/CaslonDoric/CaslonDoric-Regular.otf';

interface indexProps {}

/** 
 const NavContainer = styled.nav`
 display: flex;
 height: 100px;
 background-color: green;
`;
* 
*/

// const padding = '0.7rem';
const padding = '0';

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
  background-color: yellowgreen;
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
  justify-content: space-between;
  background-color: lightblue;
  flex-direction: column;
  height: 80%;
  width: 40%;
  max-height: 80%;
  max-width: 80%;
`;

const MarqueeProduct = styled.span`
  flex: 1;
  background-color: yellowgreen;
`;

const MarqueeShortText = styled.span`
  background-color: blue;
`;

const MarqueePrice = styled.span`
  background-color: green;
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

const MarqueeFlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
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

// TODO: delete this later. just a variant so i can see
// the colors and divs on the screen as i create
const ProductMiniContainer2 = styled.section`
  background-color: salmon;
  flex: 1 0;
  height: min-content;
`;

const ProductMiniContainer3 = styled.section`
  background-color: slategray;
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
  height: 6rem;
`;

export function MarqueeItemComponent({ imgUrl, productName, price }) {
  return (
    <>
      <MarqueeItemContainer>
        <MarqueeProduct>image here</MarqueeProduct>
        <MarqueeShortText>{productName}</MarqueeShortText>
        <MarqueePrice>$ {price}</MarqueePrice>
      </MarqueeItemContainer>
    </>
  );
}

interface ProductInfo {
  imgUrl: string;
  productName: string;
  price: number;
}

import React from 'react';
import Head from 'next/head';

export function SingleProductCardComponent({
  imgUrl,
  productName,
  price,
}: ProductInfo) {
  return (
    <>
      <ProductMiniContainer>
        <ProductNameContainer>
          <ShortText>{productName}</ShortText>
        </ProductNameContainer>
        <PriceContainer>
          <PriceText>$ {price}</PriceText>
        </PriceContainer>
        <ProductImage />
      </ProductMiniContainer>
    </>
  );
}

export function ProductContainerComponent(
  productsArray: ProductInfo[],
  top: boolean,
) {
  let container;
  if (top === true) {
    container = (
      <ProductContainer>
        <ProductHalfContainer>
          <SingleProductCardComponent
            productName={productsArray[0].productName}
            price={productsArray[0].price}
            imgUrl={productsArray[0].imgUrl}
          />
        </ProductHalfContainer>
        <ProductHalfContainer>
          <SingleProductCardComponent
            productName={productsArray[1].productName}
            price={productsArray[1].price}
            imgUrl={productsArray[1].imgUrl}
          />
          <SingleProductCardComponent
            productName={productsArray[2].productName}
            price={productsArray[2].price}
            imgUrl={productsArray[2].imgUrl}
          />
        </ProductHalfContainer>
      </ProductContainer>
    );
  } else {
    container = (
      <ProductContainer>
        <ProductHalfContainer>
          <SingleProductCardComponent
            productName={productsArray[1].productName}
            price={productsArray[1].price}
            imgUrl={productsArray[1].imgUrl}
          />
          <SingleProductCardComponent
            productName={productsArray[2].productName}
            price={productsArray[2].price}
            imgUrl={productsArray[2].imgUrl}
          />
        </ProductHalfContainer>
        <ProductHalfContainer>
          <SingleProductCardComponent
            productName={productsArray[0].productName}
            price={productsArray[0].price}
            imgUrl={productsArray[0].imgUrl}
          />
        </ProductHalfContainer>
      </ProductContainer>
    );
  }
  return <>{container}</>;
}

const index = function indexComponent<indexProps>({}) {
  useEffect(async () => {
    console.log('its working!');
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    console.log(res.data);
  }, []);

  const text = `you're at the / page sdasfsda!`;

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/CaslonDoric/CaslonDoric-Regular.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/CaslonDoric/CaslonDoric-Medium.otf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <NavContainer>
        <NavItems>
          <ZappConceptsLogoContainer>ZappConcepts</ZappConceptsLogoContainer>
        </NavItems>
        <ThreeIconContainer>
          <NavItems>o</NavItems>
          <NavItems>o</NavItems>
          <NavItems>t</NavItems>
        </ThreeIconContainer>
      </NavContainer>
      <main>
        {ProductContainerComponent(
          [
            { productName: 'skee', price: 200, imgUrl: 'skeeng' },
            { productName: 'skee', price: 200, imgUrl: 'skeeng' },
            { productName: 'skee', price: 200, imgUrl: 'skeeng' },
          ],
          true,
        )}
        <MarqueeContainer>
          <Marquee>
            <MarqueeItemComponent
              productName="productName"
              price="300"
              imgUrl={undefined}
            />
            <MarqueeItemComponent
              productName="productName"
              price="300"
              imgUrl={undefined}
            />
            <MarqueeItemComponent
              productName="productName"
              price="300"
              imgUrl={undefined}
            />
          </Marquee>
        </MarqueeContainer>
        {ProductContainerComponent(
          [
            { productName: 'skee', price: 200, imgUrl: 'skeeng' },
            { productName: 'skee', price: 200, imgUrl: 'skeeng' },
            { productName: 'skee', price: 200, imgUrl: 'skeeng' },
          ],
          false,
        )}
      </main>
      <FooterContainer>sdfsf</FooterContainer>
    </>
  );
};

export default index;
