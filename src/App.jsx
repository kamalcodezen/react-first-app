import "./App.css";
import "./Todo";
import ToDo from "./Todo";
import Fruit from "./Todo";
import Library from "./Library";
import Event from "./event";

// function App() {
//   return (
//     <>
//       <h1>Simple Counter</h1>
//     </>
//   );
// }

const books = [
  { id: 1, name: "bengali", price: 250 },
  { id: 2, name: "english", price: 290 },
  { id: 3, name: "chemistry", price: 270 },
  { id: 4, name: "math", price: 280 },
];

function App() {
  const price = 200;
  return (
    <>
      <Event />

      <Library books={books}></Library>

      <Fruit name="kamal" task="Eat Litchi" isEating={true} price={price}>
        {" "}
      </Fruit>
      <Fruit name="ijifa" task="Eat Apple " isEating={false}>
        {" "}
      </Fruit>
      <Fruit name="shoaib" task="Eat Mango" isEating={true} price="100">
        {" "}
      </Fruit>

      <Developer name="kamal" tech="js" />
      <Developer name="aisha" tech="java" />

      {/* <ToDo 
      task="Learn React" 
      isDone={true} 
      price={price}>
      </ToDo>

      <ToDo 
      task="Learn JavaScript" 
      isDone={true}>       
      </ToDo>

      <ToDo 
      task="Take a shower" 
      isDone={false} 
      price="100">
      </ToDo> */}

      {/* <ToDo
        name="Ijifa"
        fruit="Litchi"
        task="ate the fruit"
        isFruit={true}
        price={price}
      ></ToDo>

      <ToDo name="shoaib" fruit="Litchi" isFruit={true}></ToDo>

      <ToDo
        name="kamal"
        fruit="Litchi"
        task="didn't ate the fruit"
        isFruit={false}
        price="50 "
      ></ToDo> */}

      <h1>React Core Concept</h1>
      {/* <Car name="BMW" price="2000000"></Car>
      <Car name="MERCEDES"></Car>
      <Device name="Laptop" price="70000"></Device>
      <Device name="Mobile" price="30000"></Device>
      <Device name="Drone" price="100000"></Device>
      <Person></Person>
      <h2> First Time Using React</h2>
      <Sports></Sports>
      <Person></Person>
      <Pet></Pet> */}
    </>
  );
}

function Developer({ name, tech }) {
  return (
    <div>
      <p>Developer : {name}</p>
      <p>Tech : {tech}</p>
    </div>
  );
}

function Car({ name, price = 0 }) {
  return (
    <div className="sports">
      <p>
        {name} {price}
      </p>
    </div>
  );
}

function Device(Props) {
  console.log(Props);
  return (
    <div
      style={{
        padding: "10px",
        border: "2px solid yellowgreen",
        borderRadius: "10px",
        marginBottom: "10px",
        fontSize: "20px",
      }}
    >
      <p>Device Name : {Props.name}</p>
      <p>Price :{Props.price}</p>
    </div>
  );
}

function Person() {
  const name = "kamal";

  return <p>My Name Is {name}</p>;
}

function Sports() {
  return (
    <div className="sports">
      <h3>Cricket</h3>
      <ul>
        <li>Eden Garden</li>
        <li>Ncr</li>
      </ul>
      <p>Playing And Losing</p>
    </div>
  );
}

function Pet() {
  const petStyle = {
    color: "yellow",
    fontSize: "46px",
  };
  return (
    <div
      style={{
        color: "red",
        textAlign: "center",
        background: "purple",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <h2 style={petStyle}>Cat</h2>
      <p>My Small Cat</p>
    </div>
  );
}

export default App;
