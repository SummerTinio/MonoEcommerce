## **Getting Started**

First, **clone this repository**:

```bash
git clone https://github.com/SummerTinio/MonoEcommerce.git
cd MonoEcommerce
npm install
```

Afterwards, **configure the app by creating an .env file** at the top level directory (same level as package.json) with the following entries:
```
DATABASE_URL="postgres://... URI from your Heroku PostgreSQL instance"

NEXT_PUBLIC_CHEC_PUBLIC_API_KEY="Your Public API key from Commerce JS"

NEXT_PUBLIC_CLERK_FRONTEND_API="Your Public API key from Clerk.dev"
```

Then, **run the development server**:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) with your browser to view the app.

## **About this Web app:**

- **E-commerce web app** for users to buy from a list of products. In particular, this is a website where **buyers can purchase Dance Tutorials** from my favorite choreographers.
- to be developed in **7 days**
    - new technologies learned: 
        - Relational databases, PostgreSQL, Prisma, 
        - 3rd Party API's: Commerce JS, Clerk.dev
    - technologies used:
        - **React, Styled Components (CSS, SCSS, CSS Grid, Flexbox) with Material UI, Redux Toolkit, NextJS for SSR, Node, Express, Prisma ORM for PostgreSQL, Vercel for deployment**
- Buyers can..
  - **Log in passwordlessly** using pre-vetted credentials - through Google, Facebook, or Tik Tok (**Oauth**), 
  - **View a list of products**, and 
  - **Can purchase tutorials via credit card**
    - All transactions are **safe & secured by 2048 bit SSL encryption**.
    - Alternatively, since prices are set to 'pay what you want,' **users have the option to enter a payment amount of `0.00` and forego having to add a credit card**. 
- Buyers **will receive an email notification of their order with a download link** from which they can download the file/s they bought.![Order notification for Buyers by Email](https://i.imgur.com/qYnh6r5.jpg) [Imgur link to a .gif of the Checkout process](https://imgur.com/HDZikVf)
- From the Seller's side, they **will be notified via Email of buyers who had purchased their products**. ![Order notification for Sellers by Email](https://i.imgur.com/iaoB7rC.jpg)

## **Features and Functionalities by User & Priority**
- Note: Due to time constraints, it was not possible to implement all these features, rather, if not already included (with a ✅ mark), they are for future implementation as I continue working on the app.
 
As a **guest**, users may
- ✅login via Oauth
- ✅view a list of products
- view products by id
+ search for products based product name +
+ sort product list based on: +
  - price
+ sort reviews by highest <-> lowest of the ff.: +
  - date added +
  - average rating +

If **registered**, users may
- ✅logout
- ✅use **seller** or **buyer** features

As a **seller**, through the Chec dashboard, users may:
  - ✅add a product
  - ✅delete a product
  - ✅update a product
  - ✅view all orders
  + sort orders by status +
  + accept order cancellation +
  - ✅update order status
    - cancelled
    - shipped
  + archive an order +

As a **buyer**, users may:
- add products to cart
- ✅ directly checkout products (i.e. purchase items)
- ✅ receive email notifications of orders
- ✅ download files from digital purchases made on the app
- ✅ view all orders via email
+ cancel an order +
+ receive an order (considered fulfilled) +
- leave a product review +
+ delete their product review +
+ vote a review as helpful +
+ add products to wishlist +
+ add wishlisted products to cart +
 
## **The Wireframe**
![**The Initial Wireframe**](https://i.imgur.com/D4WaEcA.jpg)
 
## **RESTful API**
- Please see https://docs.google.com/spreadsheets/d/1jKfo0t7NaOHg6Ahtzvzdlaoub6NUom3zscNS08DC8fw/edit?usp=sharing
- ![Preview:](https://i.imgur.com/4OpexCP.jpg)
- ![JSON response from /api/v1/reviews](https://i.imgur.com/x9HupW9.jpg)
- ![JSON Response from /api/v1/products](https://i.imgur.com/DZK571q.jpg)
 
 ## **Key Design Decisions**
- Used **NextJS for Server-side Rendering**
  - **Better for screenreaders** as **static markup is generated on demand** -- instead of being dynamically hydrated from scratch (i.e. when using React alone)
- Goal was **to optimize for development time**
  - Researched on technologies that are known to **seamlessly integrate together with TypeScript and NextJS** in order to lessen potential debugging time
- Considerations on **consistency between browsers**
  - Made **use of widely-supported CSS features** 
    - [reference: **caniuse.com**](https://www.caniuse.com/)
  - Used a **minimal, but complete CSS reset** **to ensure consistent baseline styles for all clients/browsers**
    - **Minimal** - to not pollute styles unnecessarily
    - **Complete** - to ensure all html elements **start from the same base styles**
  - used styled components, which has **built-in vendor-prefixing upon compilation**
    - **automatically adds --webkit- prefixes** upon compiling
- Considerations for **accessibility**
  - Used [**semantic markup**](https://learn-the-web.algonquindesign.ca/topics/html-semantics-cheat-sheet/) wherever possible (to convey meaning through html tags/elements)
  - Included **media query for prefers-reduced-motion** that lessened CSS animations and transitions
  - For future styling: **Increased color contrast for visual accessibility**
- Used **Prisma as an ORM for PostgreSQL**
  - **To preserve the accuracy and integrity of relations I wanted in my data** in a **type-safe and performant** way, **while optimizing for development speed** within 7 days
    - I had no prior experience with SQL and only learned how to model data relationally this week, but had used NoSQL databases like Redis and Mongodb before.
- Used **Function components** instead of Class-based ones as it is the modern and recommended way to use React (for non-legacy projects)
- Used **Redux Toolkit** to optimize for development speed.
- Deployed the app to **Vercel** since it is **NextJS' native platform**, and **since static assets are deployed to Vercel's CDN**'s which makes it **faster to load for users/clients who are geographically near distribution sites (better UX)**
  - Initially scaffolded a CI/CD pipeline for AWS Cloudfront CDN, but [additional configuration](https://gist.github.com/rbalicki2/30e8ee5fb5bc2018923a06c5ea5e3ea5) and debugging may have taken more time
- Used **Husky to automate pre-commit code formatting** with Prettier and Eslint to ensure consistency and extensibility in code style
- Used **API versioning (SemVer)** to convey meaning (breaking changes, minor updates, patches) via API endpoints
- Intended to add **image uploads to the app via AWS S3** (via pre-signed bucket upload URL's)
  - AWS CloudFront, S3
      - CloudFront CDN for **faster delivery of assets and better UX** (US West 1)
      - S3 for **scalable file upload**
      - AWS S3 $0.023 per GB/month
      - as opposed to $0.15 per GB/month with Azure, $0.026 per GB/month on GCP
- Used domain on Namecheap **with SSL to enable encrypted connections via HTTPS**
- Scaffolded a Custom Express server for use with NextJS
  - To have more granular control over routes and middleware
  - Added **Helmet as a Middleware to add secure HTTP headers via Express**
- However, had to use the built-in NextJS Server (which uses Express under the hood as well), in order to buglessly deploy to Vercel (as much as possible), and to make use of out-of-the-box optimizations from NextJS

## **Programmatic Optimizations and Nice-to-haves**
- TODO: for future implementation

- **Frontend**
    - **Lazy loading** for React components
        - **lessen initial bundle size**
    - **Lessen unnecessary renders**
        - things to look into: useCallback, useMemo, Pure Component
    - Add more **complex animations** with Framer Motion and GSAP, Scrolltrigger, React Three Fiber
    - Add **opinionated styling** ([**Codrops**](https://tympanus.net/codrops/) and [**Awwwards**](https://www.awwwards.com/))
    - **Measure, then Optimize Lighthouse metrics** - Accessibility, First Contentful Paint, Cumulative Layout Shift, etc.

- **Backend**
    - memcached or Redis **query caching layer**
    - Add [**additional security features for Express**](https://expressjs.com/en/advanced/best-practice-security.html#use-cookies-securely) server
    - **Rate limiting** for Authorized-only routes (e.g. purchasing)

- **CI/CD**
    - a fully-configured* [**CI/CD pipeline for NextJS to AWS CloudFront (CDN)**](https://gist.github.com/rbalicki2/30e8ee5fb5bc2018923a06c5ea5e3ea5)

- **Documentation**
    - [**Swagger Document**](https://swagger.io/docs/) for REST API

- **Faster Workflows**
    - **Husky** branch and commit message **pre-commit formatting hooks**
        - to **auto-enforce consistency in commit practices**
 
## **Database Model for PostgreSQL through Prisma Schema**
- Using **Prisma as an ORM**, I mapped my Prisma Schema to the following PostgreSQL table structure:

  #### **user_auth**
    - id
    - email
    - hashed_password
    - username_auth_copy
    - #### **Relations**
      - username_auth_copy to username (on user table) - 1:1
 
  #### **user**
    - id
    - name
    - username
    - email
    - member_type (enum: BUYER, SELLER)
    - delivery_address
    - created_at
    - updated_at
    - #### **Relations**
      - user to orders - 1:many
      - user to reviews - 1:many
    
  #### **products**
    - id
    - name
    - price
    - average_rating
    - variable_price
      - future feature: allow sellers to change price
    - date_last_updated
    - available_quantity
    - #### **Relations**
      - product to reviews - 1:many
      - products to order_item
        - **Reverse relation via in-between table order_item** to show many:1:1 relation between **products:order_item:order**, as it is not possible to embed records / documents in PostgreSQL
 
  #### **review**
    - id
    - rating
    - body
    - created_at
    - date_last_updated
    - num_is_helpful 
      - No. of times a particular review was thumbs-upped
    - #### **Relations**
        - reviews to product - many:1
        - review to user - many:1
        - reviews to order - many:1
 
  #### **order_item** (reverse relation / in-between table)
    - id
    - quantity
    - frozen_price
    - order_id
    - product_id
    - **frozen_grand_total_cost** 
        - to ensure same price even if seller changes it
    - #### **Relations**
        - order_item to products - 1:1
        - order_item to order - many:1

  #### **order**
    - id
    - purchase_date_time
    - order_status (enum: PENDING, SHIPPED, CANCELLED, FULFILLED, CANCELLATION_REQUESTED)
    - #### **Relations**
        - orders to user - many:1
        - orders to order_item - 1:many
        - orders to reviews - 1:many

 
  #### wishlist (for future implementation)
    - user_id
    - product_id
    - product_name
    - #### **Relations**
        - wishlist to user - 1:1
        - wishlist to products - 1:many

  ## Notes:
  - field naming conventions are meant to be able to follow SQL conventions from within Prisma
    - by mapping camelCased Prisma fields and tables to snake_cased Postgres conventions

## **Summer's Development Process**

## **Project 7-day Timeline**
- 2.5 Days: Plan it out -- API Research, Wireframes, Database Table Schemas, App scaffolding, Update Readme as I go
 
- 2 Days: Backend Implementation
 
- 2 Days: Frontend Implementation

- 0.5 Day: Buffer

## **Detailed Process:**

## **Day 1**
  #### (1) Plan app
  - Choose technologies based on project duration and time tradeoffs
  - Goal: Need to lessen time debugging --> work with easily-integratable technologies
 
    #### Front End
    - React with **NextJS** for Server-side Rendering
        - **more aria- 'polite'** and **screen-reader accessible** than dynamically generated React alone
    
    - Redux
        - Flux architecture
    
    #### Back End
    - Prisma + Postgres
        - **Performant and type-safe**
        - **Integrates well with NextJS and TypeScript**
    
    + AWS CloudFront, S3
        - CloudFront CDN for **faster delivery of assets and better UX** (US West 1)
        - S3 for **scalable file upload**
        - AWS S3 $0.023 per GB/month
        - as opposed to $0.15 per GB/month with Azure, $0.026 per GB/month on GCP
    
    #### Extras
    - Framer Motion for UI Animations
        - add **media query for prefers-reduced-motion**
 
  #### (2) Complete Tasks
  - Research API's
  - Review TypeScript
 
  - Set up **Husky** to automate **pre-commit code formatting** (Prettier, Eslint-airbnb)
    - to **enforce Consistent, Easy to Read, Extensible code**
 
  - Set up **AWS CI/CD pipeline**
    - Create AWS S3 Bucket for Cloudfront Distribution
    - Prepare Github action to auto-deploy app to AWS Cloudfront CDN upon push to master
   
    - **Considerations for wiring up NextJS + CloudFront + S3**
      - https://gist.github.com/rbalicki2/30e8ee5fb5bc2018923a06c5ea5e3ea5
 
    - TODO: Merge to master
 
  - **Scaffold NextJS app** for SSR
    - **Wire up Custom Express server** for NextJS
 
## Day 2
  - Draft features and functionalities
  - Draft Backend
    - Database table schema
      - data needed based on features -> db schema
    - RESTful API
      - features -> CRUD functions -> http methods -> RESTful endpoints -> scoped authorization middleware -> PSQL transactions -> mock JSON API response -> onSuccess, onFail status codes
 
  - Finish Backend Plan
  - Finalize PSQL Tables
  - Sort features and functionalities by priority and likely speed
 
  - Research & add Prisma-Postgres integration with app
  - Create Mock UI Wireframe
  - Finish 1/4 of Ecomm App
  - Scaffold Redux, action creators
  - Implement authentication
 
## Day 3
  - Implement, Finalize **Backend**
  - Implement **Stripe Payments, 3rd-party API**
  - Create Final PSQL table Diagrams
 
## Day 4
  - Implement, Finalize **Frontend**
  - Create Final app Diagram
  - **add aria- "polite" tag attributes** to dynamically loaded parts
  - Finalize app deployment / deploy!
    - Namecheap nameservers --> zappconcepts.com
    - SSL
 
## Day 5
  - Organize Readme
 
## Day 6
  - Buffer
 
## Day 7
  - Buffer
