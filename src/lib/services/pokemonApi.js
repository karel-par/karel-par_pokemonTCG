import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pokemontcg.io/v2/",
  }),
  endpoints: (builder) => ({
    // Get cards by type
    getCardsByType: builder.query({
      query: (type) => `cards?q=types:${type}&pageSize=12`,
    }),
  }),
});

export const { useGetCardsByTypeQuery } = pokemonApi;