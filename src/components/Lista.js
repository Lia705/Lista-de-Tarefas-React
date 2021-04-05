export default function Lista ({tasks,removeFromList,checkTask}) {
    return (
      <ul className="list">
      {tasks.map((task) =>
          <li key={task.id}>
            <button className="excluir" onClick={() => removeFromList(task.id)}>Excluir</button>
            <input type="checkbox" checked={task.done} onChange={() => checkTask(task.id)}/>
            <span>{task.value}</span>
          </li>)
      }
      </ul>
    );
}