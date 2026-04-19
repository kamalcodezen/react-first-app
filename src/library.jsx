import { useState } from "react";
import Book from "./book";

export default function Library({ books }) {
  const [count, setCount] = useState(0);
  const [change, setChange] = useState("");
  const handleClickCount = () => {
    setCount(count + 1);
  };

  const handleChange = () => {
    setChange(event.target.value);
  };

  return (
    <div>
      <p>ALl Book : {books.length} </p>
      {books.map((book) => (
        <Book key={book.id} book={book}></Book>
      ))}
      <p> Total Count : {count}</p>
      <button onClick={handleClickCount}>Click me </button>
      <p> {change}</p>
      <input type="text" onChange={handleChange} placeholder="Type" />
    </div>
  );
}
