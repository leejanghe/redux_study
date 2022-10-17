import Counter from "./components/Count";
import Todos from "./components/Todos";
function App() {
  return (
    <div className="App">
      <Counter number={0} />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
