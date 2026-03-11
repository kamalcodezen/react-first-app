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
      <Person></Person>
      <h2> First Time Using React</h2>
      <Sports></Sports>
      <Person></Person>
      <Pet></Pet>
    </>
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
    fontSize:"46px"
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
