import "./App.jsx";

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
    </>
  );
}

function Person() {
  const name = "kamal";

  return( <p>My Name Is {name}</p>);
}

function Sports() {
  return (
    <div>
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

  return(
<h2>Cat</h2>
<h2>u</h2>



  )
}

export default App;
