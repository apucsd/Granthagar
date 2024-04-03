import { baseApi } from "./baseApi";

const booksApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllBooks: build.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: any) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/books",
          method: "GET",
          params,
        };
      },
      providesTags: ["books"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllBooksQuery } = booksApi;
