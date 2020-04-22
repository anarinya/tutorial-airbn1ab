# Airbn1ab

Completed tinyhouse.app tutorial by newline.co using JavaScript, TypeScript, React, MongoDB, and GraphQL.

## Setup

### Overview
1. Create accounts for third-party services.
2. Provide environment variables in .env.template file. Remove .template extension.
3. Start server. Run database seed script.
4. Start client.
5. Visit localhost URL based on provided port environment variable.

### Third-Party Services
Accounts and applications will need to be setup for the following services:
- Google OAuth 2.0
- Google Geocode API key
- Cloudinary
- Stripe (Test Environment)
- MongoDB Atlas


### Environment Variables
Remove .template from the end of the .env.template file and  provide the following environment variables:
- **SECRET** - Secret string used to enabled signed cookie support
- **NODE_ENV** - Set to development for the local env
- **DB_USER** - MongoDB Atlas database user
- **DB_USER_PASSWORD** - MongoDB Atlas database user password
- **DB_CLUSTER** - MongoDB Atlas cluster value
- **PORT** - Port to run the server on
- **PUBLIC_URL** - Public URL used to access the server
- **G_CLIENT_ID** - Google OAuth client ID
- **G_CLIENT_SECRET** - Google OAuth client secret
- **G_GEOCODE_KEY** - Google Geocode API key
- **S_SECRET_KEY** - Stripe secret key
- **CLOUDINARY_NAME** - Cloudinary account/subdomain name
- **CLOUDINARY_KEY** - Cloudinary app key
- **CLOUDINARY_SECRET** - Cloudinary app secret

### Scripts - Server
- **clear** - Clear the test database collections
- **seed** - Seed the test database collections

### Scripts - Client
- **codegen:schema** - Pull GraphQL schema from server
- **codegen:generate** - Generate TypeScript types from GraphQL schema

## Features
- Auth via Google and Stripe
- Google address geocoding
- Image upload and optimization via Cloudinary
- Search and view rental listings
- View host profiles
- Create rental listings
- Book rental listings


## Screenshots

### Home / Landing Page - Search for Listings
![Home](https://github.com/anarinya/tutorial-airbn1ab/blob/master/assets/listings.png?raw=true)

### Search Results / Listings
![Listings](https://github.com/anarinya/tutorial-airbn1ab/blob/master/assets/listings.png?raw=true)

### View Listing Detail
![Listing Detail](https://github.com/anarinya/tutorial-airbn1ab/blob/master/assets/listing.png?raw=true)

### Create Listing
![Create Listing](https://github.com/anarinya/tutorial-airbn1ab/blob/master/assets/create-listing.png?raw=true)

### Create Booking
![Create Booking](https://github.com/anarinya/tutorial-airbn1ab/blob/master/assets/create-booking.png?raw=true)

### View Profile Bookings
![View Bookings](https://github.com/anarinya/tutorial-airbn1ab/blob/master/assets/profile-bookings.png?raw=true)

## ToDo
- Full tests
- Refactor redundant code
- Refactor overall structure
