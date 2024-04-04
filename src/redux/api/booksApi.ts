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
    addBook: build.mutation({
      query: (data) => {
        return {
          url: "/books",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["books"],
    }),
    removeBook: build.mutation({
      query: (id) => {
        return {
          url: `/books/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useAddBookMutation,
  useRemoveBookMutation,
} = booksApi;
