import { baseApi } from "./baseApi";

const useApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUser: build.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: any) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/users",
          method: "GET",
          params,
        };
      },
      providesTags: ["users"],
    }),

    deleteUser: build.mutation({
      query: (id) => {
        return {
          url: `/users/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["users"],
    }),
    UpdateUser: build.mutation({
      query: (args) => {
        // console.log(args);
        return {
          url: `/users/${args.id}`,
          method: "PATCH",
          body: args.data,
        };
      },
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = useApi;
