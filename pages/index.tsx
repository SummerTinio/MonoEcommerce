import { useEffect } from 'react';
import Script from 'next/script';
import { NextPageContext } from 'next';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { withUser } from '@clerk/nextjs';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import commerce from '../lib/commerce';
import Marquee from 'react-fast-marquee';
import styled from 'styled-components';

import { useAppSelector, useAppDispatch } from '../frontend/src/hooks';
import { setProductList } from '../frontend/src/store/productListSlice';
import { NextPage } from 'next/types';
import { useUser, UserButton } from '@clerk/nextjs';

/** @ts-ignore */
// import CaslonDoric from './../public/fonts/CaslonDoric/CaslonDoric-Regular.otf';

interface indexProps { }

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
  min-width: min-content;
  width: min-content;
  white-space: nowrap;
`;

const ProductNameContainer = styled.div`
  padding: ${padding};
  width: 10vw;
  min-width: min-content;
  background-color: white;
`;

const ShortText = styled.p`
  width: 100%;
`;

const PriceContainer = styled.div`
  padding: ${padding};
  width: 17%;
  min-width: min-content;
  background-color: yellowgreen;
`;

const PriceText = styled.p``;

const MarqueeProductNameContainer = styled.div`
  padding: ${padding};
  width: 10vw;
  min-width: min-content;
  background-color: blue;
`;

const NavContainer = styled.nav`
  margin: 0.4rem 1rem 0 1rem;
  align-items: center !important;
  border-bottom: 0.5px solid;
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

const NavItems = styled.div`
  align-items: baseline;
  width: 100%;
  padding: 1rem;
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
  align-items: center
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

const LandingPageVideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.15;
  overflow: hidden;
`;

const LandingPageVideo = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const FooterContainer = styled.footer`
  margin: 0.4rem 1rem 0 1rem;
  border-top: 0.5px solid;
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

const FooterItems = styled.span`
  width: min-content;
  padding: 1rem;
  background-color: orange;
  top: 0;
  left: 0;
  flex: 1;
  background-color: teal;
`;

interface IVideoProps {
  noExtFileName: string;
  format?: string;
}

export function VideoComponent({ noExtFileName, format }: IVideoProps) {
  const src = `/img/${noExtFileName}.${format}`;
  const type = `video/${format}`;
  return (
    <LandingPageVideoContainer>
      <LandingPageVideo autoplay playsinline loop>
        <source src={src} type={type} />
      </LandingPageVideo>
    </LandingPageVideoContainer>
  );
}

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

export interface ICommerceJSProductPayload {
  id: string;
  created: string;
  updated: string;
  active: boolean;
  permalink: null | string;
  name: string;
  description: string;
  price: {
    raw: number;
    formatted: number;
    formatted_with_symbol: string;
    formatted_with_code: string;
  };
}

export function SingleProductCardComponent({
  name,
  description,
  price,
}: ICommerceJSProductPayload) {
  return (
    <>
      <ProductMiniContainer>
        <ProductNameContainer>
          <ShortText>{name}</ShortText>
        </ProductNameContainer>
        <PriceContainer>
          <PriceText>{price?.formatted_with_symbol}</PriceText>
        </PriceContainer>
        <ProductImage />
      </ProductMiniContainer>
    </>
  );
}

const ProductsListNextLinkLi = styled.li`
  margin: 0;
  padding: 0;
`;

const NextLinkAnchorTag = styled.a``;

export function Product({ name, price }: ICommerceJSProductPayload) {
  return (
    <>
      {name}: {price.formatted_with_symbol}
    </>
  );
}

export function ProductsListComponent(products: ICommerceJSProductPayload[]) {
  if (!products) return null;
  return (
    <>
      {products.map((product) => {
        <ProductsListNextLinkLi key={product.permalink}>
          <Link href={`/products/${product.permalink}`}>
            <NextLinkAnchorTag>
              <Product {...product} />
            </NextLinkAnchorTag>
          </Link>
        </ProductsListNextLinkLi>;
      })}
    </>
  );
}

type DisplayProductsProps = {
  products?: ICommerceJSProductPayload[];
};

const ProductsGrid = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: column;
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  // gap: 2rem;
`;

const ProductGridItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 30vw;
`;

const AboutAnchorTag = styled.a``;

const CheckoutAnchorTag = styled.a``;
const DisplayProducts = (props: DisplayProductsProps) => {
  const { products } = props;
  console.log('products', products);
  if (!products) return null;

  return (
    <ProductsGrid>
      {products.map((product) => {
        return (
          <ProductGridItem key={product.id}>
            <ShortText>{product.name}</ShortText>
            <ShortText>{product.price.formatted_with_symbol}</ShortText>
            <Link href={product.seo.description}>
              <a>Watch Performance Video</a>
            </Link>
            <Link href={product.checkout_url.display}>
              <a>About this Product</a>
            </Link>
            <Link href={product.checkout_url.checkout}>
              <a>Buy Now</a>
            </Link>
          </ProductGridItem>
        );
      })}
    </ProductsGrid>
  );
};



export function YTVideo({ }) {
  return (
    <>
      <iframe width="100vw" height="100vh" src="https://www.youtube.com/embed/BiRAAmYTSfI?controls=0&autoplay=0&mute=1&showinfo=0&loop=1&amp;start=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
    </>
  )
}

export function ProductContainerComponent(
  products: ICommerceJSProductPayload[],
  top: boolean,
) {
  let container;
  if (top === true) {
    container = (
      <ProductContainer>
        <ProductHalfContainer>
          <SingleProductCardComponent />
        </ProductHalfContainer>
        <ProductHalfContainer>
          <SingleProductCardComponent />
          <SingleProductCardComponent />
        </ProductHalfContainer>
      </ProductContainer>
    );
  } else {
    container = (
      <ProductContainer>
        <ProductHalfContainer>
          <SingleProductCardComponent />
          <SingleProductCardComponent />
        </ProductHalfContainer>
        <ProductHalfContainer>
          <SingleProductCardComponent />
        </ProductHalfContainer>
      </ProductContainer>
    );
  }
  return <>{container}</>;
}

const index: NextPage = function indexComponent<indexProps>({
  merchant,
  categories,
  products,
}) {
  const { firstName } = useUser();

  const productsArray = useAppSelector(
    (state) => state.productList.productList,
  );
  const dispatch = useAppDispatch();
  useEffect(async () => {
    console.log('its working!');
    // const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
    // console.log(res.data);
    console.log(merchant, categories, products);
  }, []);

  useEffect(() => {
    dispatch(setProductList(products));
  }, [products]);

  const text = `you're at the / page sdasfsda!`;

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/CaslonDoric/CaslonDoric-Light.otf"
          as="font"
          crossOrigin=""
        />
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
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/MotionPathPlugin.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/PixiPlugin.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/EasePack.min.js"></Script>
      </Head>
      {/** 
  
          <!--
          DrawSVGPlugin.min.js, MorphSVGPlugin.min.js, and SplitText.min.js are Club GreenSock perks which are not available on a CDN. Download them from your GreenSock account and include them locally like this:
  
          <script src="/[YOUR_DIRECTORY]/DrawSVGPlugin.min.js"></script>
          <script src="/[YOUR_DIRECTORY]/MorphSVGPlugin.min.js"></script>
          <script src="/[YOUR_DIRECTORY]/SplitText.min.js"></script>
  
          Sign up at https://greensock.com/club or try them for free on CodePen or CodeSandbox
          -->
            */}
      {/** 
      <pre>{JSON.stringify(merchant, null, 2)}</pre>
      <pre>{JSON.stringify(categories, null, 2)}</pre>
       * 
       */}
      <NavContainer>
        <NavItems>
          <ZappConceptsLogoContainer>ZappConcepts</ZappConceptsLogoContainer>
        </NavItems>
        <ThreeIconContainer>
          {
            /** 
             <NavItems>Cart</NavItems>
             * 
             */
          }
          <NavItems>
            <Link href="/">
              <a>
                Home
              </a>
            </Link>
          </NavItems>
          <NavItems>
            <UserButton />
          </NavItems>
        </ThreeIconContainer>
      </NavContainer>
      <main>
        {
          /** 
           <VideoComponent noExtFileName="impact" format="mp4" />
           * 
           <YTVideo />
           */
        }
        {/** 
           {ProductContainerComponent(products, true)}
           * 
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
                 <Marquee pauseOnHover={true}>
                 </Marquee>
                 {ProductContainerComponent(products, false)}
                 <pre>{JSON.stringify(products, null, 2)}</pre>
            */}
        <DisplayProducts products={products} />

        <FooterContainer>
          <FooterItems>
            <ZappConceptsLogoContainer>
              {'(415) - 321 - 4213'}
            </ZappConceptsLogoContainer>
          </FooterItems>
          <FooterItems>
            <ZappConceptsLogoContainer>
              <Link href="/#">
                <a>ZappConcepts (c) 2022</a>
              </Link>
            </ZappConceptsLogoContainer>
          </FooterItems>
          <ThreeIconContainer>
            <FooterItems>Facebook</FooterItems>
            <FooterItems>Instagram</FooterItems>
            <FooterItems>Tik Tok</FooterItems>
          </ThreeIconContainer>
        </FooterContainer>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}

export default withUser(index);
