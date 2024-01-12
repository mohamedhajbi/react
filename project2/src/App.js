import Todo from "./components/Todo"; 
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) {
  const taskList = props.tasks?.map((task) => <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />); 
  const btnList = props.filters.map((filter) => <FilterButton id={filter.id} name={filter.name} key={filter.id} />); 
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>

        <Form />
     
      <div className="filters btn-group stack-exception">
        {btnList}
      </div>
      <h2 id="list-heading">3 tâches restantes</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
