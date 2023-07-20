
![FletNix-removebg-preview](https://github.com/Nish-026/FletNix/assets/115637679/2d4ced14-74c6-40ec-8b25-1b197b542d91)


# FletNix - Movie/TV Show Search and Filter App

FletNix is a web application that allows users to search for and filter through a comprehensive list of movies and TV shows. Users can register and log in using their email, password, username and age. The app provides basic authentication, pagination, search functionality, and content filtering based on age.

## Table of Contents
- [Features](#features)
- [Deployment](#deployment)
- [Setup](#setup)
- [Importing Data](#importing-data)
- [Authentication](#authentication)
- [Pagination](#pagination)
- [Search](#search)
- [Content Filtering](#content-filtering)
- [Filter Functionality](#filter-functionality)
- [Detail Page](#detail-page)

## Features
- User registration and login with email, password.
- JWT Authentication
- Paginated list of movies and TV shows with 15 items per page.
- Real-time search functionality to find movies or TV shows by title or cast.
- Age-based content filtering to hide "R" rated items for users below 18 years old.
- Filter options to select between movies and TV shows.
- Detailed information page for each item with director, cast, country, release year, rating, duration, genres, and description.

## Deployment

The application has been deployed using the following platforms:

- Backend Deployment: Cyclic
  - Backend API and services are hosted on Cyclic.
  - Link: [https://good-erin-vulture-toga.cyclic.app]

- Frontend Deployment: Netlify
  - The frontend interface and user interface are hosted on Netlify.
  - Link: [https://fletnixv2.netlify.app]

## Setup
To set up and run the FletNix application, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies for the frontend and backend servers by following the instructions in their respective directories.
3. Configure the necessary environment variables.
4. Start the backend server using command - npm run server.
5. Start the frontend server using command - npm build.
6. Open the application in your web browser.

## Importing Data
To import the provided data into MongoDB, follow these steps:

1. Ensure that you have MongoDB installed and running on your local machine.
2. Use the provided CSV file into the MongoDB database - Link[https://drive.google.com/file/d/1a9S-Qfs1Mc_SutljdvOEAnJ5QJLEAebB/view].
3. Verify that the data has been successfully imported.

## Authentication
FletNix provides a secure authentication mechanism. Users can register and create an account using their email, password, username and age. To log in, users must provide their registered email and password. The application ensures age-appropriate content visibility based on the user's age.

## Pagination
The FletNix application displays a paginated list of movies and TV shows. Each page contains 15 items, allowing users to easily navigate through the extensive catalog.

## Search
The search functionality enables users to find specific movies or TV shows by entering keywords in the search bar. The application provides real-time search suggestions and displays matching results as the user types.

## Content Filtering
To maintain a safe and appropriate viewing experience, FletNix implements content filtering based on age. Users below 18 years old are restricted from accessing "R" rated items, ensuring compliance with appropriate content guidelines.

## Filter Functionality
FletNix offers a convenient filter functionality, allowing users to refine their search results. Users can easily switch between movies and TV shows to explore the content that matches their preferences.

## Detail Page
Clicking on an item in the list will take users to a dedicated detail page for that movie or TV show. The detail page provides comprehensive information about the selected item, including the director, cast, country, release year, rating, duration, listed genres, and a description.


### Tech Stack

#### Front-End
-  Angular <img src="https://github.com/Nish-026/Learning_Angular/assets/115637679/e5dd2321-8868-4e4a-b607-207baf6e436b" alt="HTML Icon" width="40" height="40">

#### Back-End
-  Node JS  <img src="https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/nodejs.svg" alt="HTML Icon" width="50" height="50">
-  Express  <img src="https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/express.svg" alt="HTML Icon" width="50" height="50">


#### DataBase
-  Mongo DB  <img src="https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/mongodb-icon.svg" alt="HTML Icon" width="40" height="40">


