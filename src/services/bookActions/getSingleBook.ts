"use server";
export const getSingleBook = async (id: string) => {
  const url = `${process.env.NEXT_PUBLIC_BACKED_URL}/books/${id}`;

  const res = await fetch(url, {
    method: "GET",
    cache: "no-store",
  });
  const book = res.json();
  return book;
};
