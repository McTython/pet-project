import { IProduct } from "@/shared/config/interfaces/IProduct";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => {
        console.log("Getting products...");
        return "/products";
      },
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
