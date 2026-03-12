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
//
//       {name} favorite fruit {fruit} and ate the fruit {isDone} and fruit Price{" "}
//       {price}
//     </p>
//   );
// }

// export default function ToDo({ name, fruit, task, isFruit, price = 0 }) {
//   // <p className="sports">

//   //   {name} favorite fruit {fruit} and ate the fruit {isDone} and fruit Price{" "}
//   //   {price}

//   // </p>

//   if (isFruit) {
//     return (
//       <p>
//         {name} favorite fruit {fruit} and {task} {isFruit} and fruit Price {price}
//       </p>
//     );
//   }
//   return (
//     <h3>
//       {name} favorite fruit {fruit}
//       {isFruit} {task}! and fruit Price {price}
//     </h3>
//   );
// }

// export default function ToDo({task}) {

// return(
//   <p>Task : {task} </p>
// )
// }

// export default function ToDo({ task, isDone }) {

//   if (isDone) {
//     return (
//     <li>Task : {task}</li>
//   )
//   }else{
//     return(
//       <li>Task Pending : {task}</li>
//     )
//   }
// }

// export default function ToDo({ task, isDone, price=0 }) {
//   if (isDone) {
//     return <li>Task : {task} {price}</li>;
//   }

//   return <li>Task Pending : {task} {price}</li>;
// }

export default function Fruit({ name, task, isEating, price = 0 }) {
  if (isEating) {
    return (
      <p>
        Name : {name} Task : {task} Fruit prices {price} {price > 50 ? "best food" : "return food"}
      </p>
    );
  }

  if (price < 50) {
    return (
      <p>
        Name : {name} Task : {task} Fruit prices : {price} {price > 50 ? "best food" : "return food"}
      </p>
    );
  }
}
