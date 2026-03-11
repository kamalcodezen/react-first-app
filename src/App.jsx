import "./App.css";

// function App() {
//   return (
//     <>
//       <h1>Simple Counter</h1>
//     </>
//   );
// }

function App() {
  return (
    <>
      <Car name="BMW" price="2000000"></Car>
      <Car name="MERCEDES"></Car>
      <Device name="Laptop" price="70000"></Device>
      <Device name="Mobile" price="30000"></Device>
      <Device name="Drone" price="100000"></Device>
      <Person></Person>
      <h2> First Time Using React</h2>
      <Sports></Sports>
      <Person></Person>
      <Pet></Pet>
    </>
  );
}

function Car({ name, price=0 }) {
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
