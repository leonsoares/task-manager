import Header from "./Components/Header"

function App() {
  const name = "leon"
  return (
    <div className="app-container">
      <h1>Hello from task manager {name}</h1>
      <Header test="this is a props test"/>
    </div>
  );
}

export default App;
