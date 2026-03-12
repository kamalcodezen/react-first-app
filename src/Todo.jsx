// export default function ToDo(props) {
//   return (
//     <div>
//       <p>My Favorite : {props.name}</p>
//     </div>
//   );
// }

// export default function ToDo({ name, fruit, isDone, price = 0 }) {
//   return (
//     <p className="sports">
//       {" "}
//       {name} favorite fruit {fruit} and ate the fruit {isDone} and fruit Price{" "}
//       {price}
//     </p>
//   );
// }
export default function ToDo({ name, fruit, isFruit, price = 0 }) {
  // <p className="sports">

  //   {name} favorite fruit {fruit} and ate the fruit {isDone} and fruit Price{" "}
  //   {price}

  // </p>

  if (isFruit) {
    return (
      <p>
        {name} favorite fruit {fruit} and ate the fruit {isFruit} and fruit
        Price
        {price}
      </p>
    );
  }
  return (
    <h3>
      {name} favorite fruit {fruit}
      didn't ate the fruit {isFruit}
      and fruit Price {price}
    </h3>
  );
}
