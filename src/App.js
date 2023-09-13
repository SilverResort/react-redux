import ToDoList from "./Component/ToDoList";
import './App.css';
import AddTask from "./Component/AddTask";

function App() {
  return (
    <div className="App">
      <h1>
        <AddTask />
        <ToDoList />
      </h1>
    </div>
  );
}

export default App;
