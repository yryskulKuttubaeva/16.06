
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector(store => store);
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button>+</button>
      <button>-</button>

    </div>
  );
}

export default App;
