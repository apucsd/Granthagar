"use server";
export interface BookQuery {
  searchTerm?: string;
  publicationYear?: number;
  sort?: number;
}

export const getBooksByQuery = async (query: BookQuery) => {
  try {
    let url = `${process.env.NEXT_PUBLIC_BACKED_URL}/books`;
    const queryParams = new URLSearchParams();

    if (query.searchTerm) {
      queryParams.append("searchTerm", query.searchTerm);
    }
    if (query.publicationYear) {
      queryParams.append("publicationYear", query.publicationYear.toString());
    }
    if (query.sort) {
      queryParams.append("sort", query.sort.toString());
    }
    if (queryParams.toString()) {
      url += `?${queryParams.toString()}`;
    }

    const res = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });

    const books = await res.json();
    return books;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const getBooksByFilter = async (query: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKED_URL}/books?${query}`;

    const res = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });

    const books = await res.json();
    return books;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error; // Propagate the error to the caller
  }
};
