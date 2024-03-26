"use server";
export const getBooksByQuery = async (query: any) => {
  console.log(query);
  let url = `${process.env.NEXT_PUBLIC_BACKED_URL}/books`;
  if (query.searchTerm) {
    url = `${process.env.NEXT_PUBLIC_BACKED_URL}/books/?searchTerm=${query.searchTerm}`;
  }
  if (query.publicationYear) {
    url = `${process.env.NEXT_PUBLIC_BACKED_URL}/books/?publicationYear=${query.publicationYear}`;
  }
  const res = await fetch(url, {
    method: "GET",
    cache: "no-store",
  });
  const books = res.json();
  return books;
};
