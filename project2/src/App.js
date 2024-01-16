import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) {
  const taskList = props.tasks?.map((task) => <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />);
  const btnList = props.filters.map((filter) => <FilterButton id={filter.id} name={filter.name} key={filter.id} />);
  const remainingTasks = props.tasks.filter((task) => !task.completed).length;
  const completedTasks = props.tasks.filter((task) => task.completed).length;
  const allTasks = props.tasks.length;
  function addTask(name) {
    alert(name);
   }    
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {btnList}
      </div>
      <table>
      <thead>
          <tr>
            <th>Tâches terminées</th>
            <th>Tâches restantes</th>
            <th>Total de tâches</th>
          </tr>
        </thead>
        <tbody>
      <tr>
        <td>{completedTasks}</td>
        <td>{remainingTasks}</td>
        <td>{allTasks}</td>
      </tr>
      </tbody>
      </table>

      <ul
        role="list"
        className="todo-list stack-large stack-exception">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
