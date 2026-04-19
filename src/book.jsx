export default function Book({ book }) {
  const { name, price } = book;

  return (
    <ul>
      <li>
        Book name {name} : and Price {price}
      </li>
    </ul>
  );
}
