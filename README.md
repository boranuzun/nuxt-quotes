# Nuxt-Quotes

A simple quote application built with Nuxt.js and powered by the [Quotable API](https://github.com/lukePeavey/quotable). This app fetches a random quote from the API and displays it on the page. It also allows you to get a new quote by clicking a button.

## Features

- Fetches a random quote from the Quotable API
- Displays the quote content and author on the page
- Allows you to get a new quote with a button click
- Changes the background color with each new quote

## Technologies Used

- Nuxt.js: A Vue.js framework for building web applications
- Quotable API: An API that provides a collection of famous quotes

## Getting Started

1. Clone the repository

   ```bash
   git clone https://github.com/boranuzun/nuxt-quotes.git
   ```

2. Navigate to the project directory
   ```bash
   cd nuxt-quotes
   ```
3. Install the dependencies
   ```bash
   npm install
   ```
4. Start the development server
   ```bash
   npm run dev
   ```
5. Open your browser and visit http://localhost:3000 to see the app in action.

# Configuration

The app uses the Quotable API to fetch random quotes. The API endpoint is set to `https://api.quotable.io/quotes/random` in the `fetchQuote` function of the `Quotes.vue` component. If you want to use a different API or modify the existing one, you can update the endpoint in the code accordingly.

# Contributing

Contributions are welcome! If you find any issues with the app or have suggestions for improvements, feel free to open an issue or submit a pull request.

# License

This project is licensed under the [MIT License](LICENSE).
