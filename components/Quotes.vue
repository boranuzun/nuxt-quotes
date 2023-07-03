<script setup>
import { ref } from "vue";

// Initial quote
const quotes = ref([]);
const quote = ref(null);

const fetchQuote = async () => {
  const response = await useFetch("https://api.quotable.io/quotes/random");
  quotes.value = response.data._value;
  quote.value = quotes.value[0];
};

// Fetch the initial quote
fetchQuote();

// Debugging
console.log("Quotes:", quotes.value[0]);
console.log("Content:", quote.value?.content);
console.log("Author:", quote.value?.author);
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
          <cite class="pr-3 font-medium text-gray-900">
            — {{ quote?.author }} —
          </cite>
        </div>
      </figcaption>
    </figure>

    <!-- Button to fetch new quote -->
    <div class="flex items-center justify-center flex-col">
      <button
        @click="fetchQuote"
        class="my-16 px-6 py-4 bg-gray-900 text-white rounded-md"
      >
        Get New Quote
      </button>
      <footer>
        <div class="p-1 text-sm italic">
          <span>Built with </span
          ><NuxtLink to="https://github.com/lukePeavey/quotable">
            <span class="underline">Quotable API</span></NuxtLink
          >
        </div>
        <div class="p-1 text-sm">&copy; Boran UZUN — 2023</div>
      </footer>
    </div>
  </div>
</template>

<style></style>
