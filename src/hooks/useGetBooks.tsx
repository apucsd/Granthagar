import { getBooksByQuery } from "@/services/bookActions/getBookByQuery";

const UseGetBooks = async () => {
  return await getBooksByQuery({});
};

export default UseGetBooks;
