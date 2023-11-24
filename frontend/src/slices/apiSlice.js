// Importing necessary functions from the Redux Toolkit Query library.
// createApi - A function to create a service for handling API requests.
// fetchBaseQuery - A utility to create a base query with common settings for making API requests.
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Importing the BASE_URL from a constants file. This BASE_URL is used as the base endpoint for all API requests.
import { BASE_URL } from "../constants";

// Creating a base query instance using fetchBaseQuery, which is configured with the BASE_URL.
// This base query will be used for all requests made by the API service.
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

// Creating an API slice using createApi, a key feature of Redux Toolkit Query.
// This API slice will manage the API state and provide auto-generated React hooks for data fetching.
export const apiSlice = createApi({
  // Setting the baseQuery created above as the default fetch mechanism for the API slice.
  baseQuery,

  // Defining tagTypes, which are used to categorize and invalidate related data in the cache.
  // For example, if data related to 'product' changes, the cache for 'product' can be invalidated.
  tagTypes: ["product", "order", "user"],

  // Declaring endpoints within a builder function. Endpoints are where you define how to fetch data for a particular resource.
  // Here, it's an empty object, indicating that specific endpoints will be defined later.
  endpoints: (builder) => ({}),
});

