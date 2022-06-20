import "./App.css";
import NavBAr from "./Components/NavBar/NavItems";

function App() {
  let fname = "maaz";
  let lname = "anis";
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>WELCOME TO REACT JS</h1>
      <NavBAr fname={fname} lname={lname} />
    </div>
  );
}

export default App;
