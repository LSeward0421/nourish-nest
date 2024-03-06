<p align="center">
<img src="../nourish-nest/src/assets/NN_default_img.png" alt="NourishNest Logo" title="Nourish Nest Logo" width="200"/>
</p>

# NourishNest 🌱

## Overview
Welcome to NourishNest, the digital mockup of a grocery store that brings the convenience of shopping for fresh groceries right to your fingertips. Developed as part of a week-long challenge, this React.js application is designed to showcase front-end web development skills, with a focus on user experience and interaction with the Edamam Food Database API.

## Objective
The goal of NourishNest is to simulate the experience of digital grocery shopping, from product search to cart management and initiating a mock purchase. It is an opportunity to demonstrate the ability to design and implement user-friendly web applications using modern development practices.

## Technologies 🛠️
- React.js
- React Router
- Node.js
- Vite
- Edamam Food Database API
- CSS

## Features ✨
- Home Page: Introduction and navigation to the app's main features.
- Product Search: Users can search for groceries and receive a list of results.
- Cart Management: Add and remove items from a shopping cart.
- Mock Purchase: Simulate the checkout process with a confirmation page.

## Deployment 🌐

The application is deployed and available live at: [NourishNest Live](#)

## Setup Instructions 🚀

### Prerequisites
- Ensure [Node.js](https://nodejs.org/en/) is installed on your machine.

### Installation
1. Clone the repo:
    ```sh
    git clone https://github.com/LSeward0421/nourish-nest.git
    ```
2. Enter the project directory:
    ```sh
    cd nourish-nest
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

### Edamam API Setup
To access product data, NourishNest uses the Edamam Food Database API. Follow these steps to obtain your API credentials:

1. Register for a [free DEVELOPER account](https://developer.edamam.com/food-database-api) with Edamam.
2. During registration, select the 'Developer' plan for the Food Database API and use your name or an organization identifier to qualify for the free plan.
3. After setting up your account, [create an Application](https://developer.edamam.com/edamam-recipe-api) on Edamam to receive your Application ID and Application Keys.

These credentials are necessary for making API requests to fetch food product data.

### Create a local environment
2. Create a `.env.local` file in your project root and add your API credentials:
    ```env
    VITE_API_ID=your_app_id
    VITE_API_KEY=your_api_key
    ```

### Running the App
- Start the development server by running:
    ```sh
    npm run dev
    ```
- After the server starts, Vite will provide you with the URLs to view your app. Typically, the app will be accessible at [http://127.0.0.1:5173](http://127.0.0.1:5173) for local development.
- Open the provided URL in your browser to view the app. Note that the port number `5173` is used by default by Vite, but this can vary if the port is already in use.


## Contributors 👥
- [Lauren 'Larry' Seward](https://www.linkedin.com/in/l-seward/)

