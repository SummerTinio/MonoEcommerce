## **Getting Started**

First, **clone this repository**:

```bash
git clone https://github.com/SummerTinio/MonoEcommerce.git
cd MonoEcommerce
npm install
```

Afterwards, **configure the database by creating an .env file** at the top level directory (same as package.json) with the following entries:
```
DATABASE_URL="postgres://... URI from your Heroku PostgreSQL instance"
NODE_ENV="development"
```

Then, **run the development server**:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) with your browser to view the app.

## **About this Web app:**

- **E-commerce web app** for users to buy and sell products.
- More like Amazon/seller-buyer than Offerup/peer-to-peer
- to be developed in **7 days**
    - new technologies learned: 
        - Relational databases, PostgreSQL, Prisma
    - technologies used:
        - **React, Redux, NextJS, Node, Express, Prisma ORM, PostgreSQL, AWS S3**
 
#### **Features and Functionalities by Priority**
- TODO: Sort by Priority after finalizing list
- `+` signifies 'nice to haves' (i.e. for future implementation)
 
As a **guest**, users may
- create an account
 
- login
 
- view a list of products
- view products by id
 
+ search for products based product name +
+ sort product list based on: +
  - price
+ sort reviews by highest <-> lowest of the ff.: +
  - date added +
  - average rating +
 
If **registered**, users may
- logout
- use **seller** or **buyer** features
 
As a **seller**, users may:
  - add a product
  - delete a product
  - update a product

  - view all orders
  + sort orders by status +
  + accept order cancellation +
 
  - update order status
    - cancelled
    - shipped
 
  + archive an order +
 
As a **buyer**, users may:
- add products to cart
- checkout the cart (i.e. purchase cart items)
 
- view all orders
+ cancel an order +
+ receive an order (considered fulfilled) +
 
- leave a product review +
+ delete their product review +
 
+ vote a review as helpful +
+ add products to wishlist +
  + add wishlisted products to cart +
 
 
#### **Database Model for PostgreSQL through Prisma Schema**
- Using **Prisma as an ORM**, I mapped my Prisma Schema to the following PostgreSQL table structure:

  #### **user_auth**
    - id
    - email
    - hashed_password
    - #### **Relations**
        - user_auth to users - 1:1
 
  #### **user**
    - id
    - member_type
    - username
    - order_id
    - #### **Relations**
        - users to user_auth - 1:1
        - users to orders - 1:many
    
  #### **product**
    - id
    - product_name
    - average_rating
    - available_quantity
    - variable_price
        - future feature: allow sellers to change price
    - date_last_updated
    - #### **Relations**
        - products to order_item
            - **Reverse relation via in-between table order_item** to show many:1:1 relation between **products:order_item:order**, as embedded documents are not permitted in PostgreSQL
        - products to reviews - 1:many
 
  #### **review**
    - id
    - user_id - required to create a review
    - date_last_updated
    - body - required column
    - rating
    - num_is_helpful - no. of times thumbs-upped
    - #### **Relations**
        - reviews to users - many:1
        - reviews to products - many:1
 
  #### **order_item** (reverse relation / in-between table)
    - id
    - product_id
    - quantity
    - **frozen_grand_total_cost** 
        - to ensure same price even if seller changes it
    - #### **Relations**

  #### **order**
    - id
    - purchase_date_time
    - order_status
    - #### **Relations**
        - orders to users - many:1
        - orders to users - many:many
 
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
 
#### **RESTful API**
- see https://docs.google.com/spreadsheets/d/13fPutPu02_7cIFDDjZKIWxo37De4hBLeOIRdIZykgeI/edit?usp=sharing
 
#### **Programmatic Optimizations and Nice-to-haves**
- TODO: for future implementation

- **Frontend**
    - **Lazy loading** for React components
        - **lessen initial bundle size**
    - **Lessen unnecessary renders**
        - things to look into: useCallback, useMemo, Pure Component
    - Add more **complex animations** with Framer Motion and GSAP
    - Add **opinionated styling** ([**Codrops**](https://tympanus.net/codrops/))

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

## **Summer's Development Process**

### **Project 7-day Timeline**
- 2.5 Days: Plan it out -- API Research, Wireframes, Database Table Schemas, App scaffolding, Update Readme as I go
 
- 2 Days: Backend Implementation
 
- 2 Days: Frontend Implementation

- 0.5 Day: Buffer
 
### **Day 1**
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
 
#### Day 2
  - Draft features and functionalities
  - Draft Backend
    - Database table schema
      - data needed based on features -> db schema
    - RESTful API
      - features -> CRUD functions -> http methods -> RESTful endpoints -> scoped authorization middleware -> PSQL transactions -> mock JSON API response -> onSuccess, onFail status codes
 
  - TODO: Finish Backend Plan
  - TODO: Finalize PSQL Tables
  - TODO: Sort features and functionalities by priority and likely speed
 
  - TODO: Research & add Prisma-Postgres integration with app
  - TODO: Create Mock UI Wireframe
  - TODO: Finish 1/4 of Ecomm App
  - TODO: Create custom errors, middleware for error handling,
  - TODO: Scaffold Redux, action creators
  - TODO: Implement authentication
 
#### Day 3
  - TODO: Implement, Finalize **Backend**
  - TODO: Implement **Stripe Payments, 3rd-party API**
  - TODO: Create Final PSQL table Diagrams
 
#### Day 4
  - TODO: Implement, Finalize **Frontend**
  - TODO: Create Final app Diagram
  - TODO: **add aria- "polite" tag attributes** to dynamically loaded parts
  - TODO: Finalize app deployment / deploy!
    - Route53 --> zappconcepts.com
    - SSL
 
#### Day 5
  - Organize Readme
 
#### Day 6
  - Buffer
 
#### Day 7
  - Buffer
