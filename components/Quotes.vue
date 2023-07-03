<script setup>
// Initial quote
const quotes = ref([]);
const quote = ref(null);

// Function to generate a random pastel color
const getRandomColor = () => {
  const hue = Math.floor(Math.random() * 360); // Random hue value between 0 and 360
  const saturation = Math.floor(Math.random() * 21) + 80; // Random saturation value between 80 and 100
  const lightness = Math.floor(Math.random() * 11) + 70; // Random lightness value between 70 and 80

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

// Set background color on the client-side
const setBackgroundColor = () => {
  const color = getRandomColor();
  document.body.style.backgroundColor = color;
};

// Fetch the quote from the API
const fetchQuote = async () => {
  const response = await useFetch("https://api.quotable.io/quotes/random");
  quotes.value = response.data.value;
  quote.value = quotes.value[0];

  // Set background color on the client-side
  if (typeof document !== "undefined") {
    setBackgroundColor();
  }
};

// Fetch the initial quote
fetchQuote();

// Watch for changes in quote for debugging purposes
// watch(quote, (newQuote) => {
//   console.log("Content:", newQuote?.content);
//   console.log("Author:", newQuote?.author);
// });
</script>

<template>
  <div>
    <figure class="max-w-screen-md mx-auto text-center">
      <!-- Quote display -->
      <svg
        aria-hidden="true"
        class="w-12 h-12 mx-auto mb-3 text-gray-900"
        viewBox="0 0 24 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
          fill="currentColor"
        />
      </svg>
      <blockquote>
        <p class="text-2xl italic font-medium text-gray-900">
          {{ quote?.content }}
        </p>
      </blockquote>
      <figcaption class="flex items-center justify-center mt-6 space-x-3">
        <div class="flex items-center divide-x-2 divide-gray-500">
          <cite class="font-medium text-gray-900">
            — {{ quote?.author }} —
          </cite>
        </div>
      </figcaption>
    </figure>

    <!-- Button to fetch new quote -->
    <div class="flex items-center justify-center flex-col">
      <button
        @click="fetchQuote"
        class="my-16 p-4 bg-gray-900 text-white rounded-md inline-flex items-center justify-center space-x-2 hover:bg-gray-800 shadow-md hover:shadow-2xl group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          class="w-6 h-6 transition-transform duration-300 transform group-hover:rotate-180"
        >
          <path
            fill="currentColor"
            d="M17.65 6.35a7.95 7.95 0 0 0-6.48-2.31c-3.67.37-6.69 3.35-7.1 7.02C3.52 15.91 7.27 20 12 20a7.98 7.98 0 0 0 7.21-4.56c.32-.67-.16-1.44-.9-1.44c-.37 0-.72.2-.88.53a5.994 5.994 0 0 1-6.8 3.31c-2.22-.49-4.01-2.3-4.48-4.52A6.002 6.002 0 0 1 12 6c1.66 0 3.14.69 4.22 1.78l-1.51 1.51c-.63.63-.19 1.71.7 1.71H19c.55 0 1-.45 1-1V6.41c0-.89-1.08-1.34-1.71-.71l-.64.65z"
          />
        </svg>
        <span>New Quote</span>
      </button>

      <footer>
        <div class="p-1 text-sm italic">
          <span>Built with </span
          ><NuxtLink to="https://github.com/lukePeavey/quotable">
            <span class="underline">Quotable API</span></NuxtLink
          >
        </div>
        <div class="p-1 text-sm">
          <span>&copy; 2023 — </span>
          <span><NuxtLink to="https://boranuzun.ch">Boran UZUN</NuxtLink></span>
        </div>
      </footer>
    </div>
  </div>
</template>
