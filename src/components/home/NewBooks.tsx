import Link from "next/link";
import Container from "../ui/Container";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import BookCard from "../ui/card/BookCard";
const booksData = [
  {
    id: 1,
    title: "Koyekti Khuner Kinara",
    author: "Chitra Banerjee Divakaruni",
    category: "Fiction",
    authorName: " Farah Taskin",
    publicationDate: "2024-02-12",
    bookLanguage: "Bangla",
    image_url:
      "https://www.boikini.com/image/cache/catalog/Anandamela/Koyekti%20Khuner%20Kinara-600x600.jpg",
    price: 350,
    original_price: 450,
  },
  {
    id: 2,
    title: "The Palace of Illusions",
    author: "Chitra Banerjee Divakaruni",
    category: "Fiction",
    authorName: "J.K. Rowling",
    publicationDate: "2022-08-25",
    bookLanguage: "English",
    image_url:
      "https://www.boikini.com/image/cache/catalog/Anandamela/Koyekti%20Khuner%20Kinara-600x600.jpg",
    price: 350,
    original_price: 450,
  },
  {
    id: 3,
    title: "The Palace of Illusions",
    author: "Chitra Banerjee Divakaruni",
    category: "Fiction",
    authorName: "J.K. Rowling",
    publicationDate: "2022-08-25",
    bookLanguage: "English",
    image_url:
      "https://www.boikini.com/image/cache/catalog/Anandamela/Koyekti%20Khuner%20Kinara-600x600.jpg",
    price: 350,
    original_price: 450,
  },
  {
    id: 4,
    title: "The Palace of Illusions",
    author: "Chitra Banerjee Divakaruni",
    category: "Fiction",
    authorName: "J.K. Rowling",
    publicationDate: "2022-08-25",
    bookLanguage: "English",
    image_url:
      "https://www.boikini.com/image/cache/catalog/Anandamela/Koyekti%20Khuner%20Kinara-600x600.jpg",
    price: 350,
    original_price: 450,
  },
  {
    id: 5,
    title: "The Palace of Illusions",
    author: "Chitra Banerjee Divakaruni",
    category: "Fiction",
    authorName: "J.K. Rowling",
    publicationDate: "2022-08-25",
    bookLanguage: "English",
    image_url:
      "https://www.boikini.com/image/cache/catalog/Anandamela/Koyekti%20Khuner%20Kinara-600x600.jpg",
    price: 350,
    original_price: 450,
  },
];

const NewBooks = () => {
  return (
    <Container>
      <h1 className="text-4xl font-semibold text-primary my-3">New Books</h1>
      <hr className="h-0.5 bg-primary w-full" />
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-5 place-items-center justify-center items-center gap-3">
        {booksData.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
      <div className="flex justify-end my-5">
        <Link href="/books/all-books">
          <Button className="gap-1 text-primary" variant="outline">
            View All <ChevronRight />
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default NewBooks;
