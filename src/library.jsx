import Book from "./book";

export default function Library({ books }) {
  console.log(books);
  return (
    <div>
      <p>ALl Book : {books.length} </p>
      {books.map((book) => (
        <Book key={book.id} book={book}></Book>
      ))}
    </div>
  );
}
