import './App.css'
import {useState,useRef} from 'react';
import Lista from './components/Lista';

document.body.style = 'background: rgb(236, 214, 217);';

export default function App() {
  const input = useRef();
  //Cria uma lista vazia chamada tasks que pode ser alterada
  const[tasks,setTasks] = useState([]);

  const addToList = (event) => {
    //A pagina nao recarrega ao adicionar uma tarefa
    event.preventDefault();
    //Cria um objeto tarefa com id, valor igual a input e status de cumprimento
    const task = {
        id:Math.random()*1000,
        value: input.current.value,
        done: false
    };
    //Adiciona o objeto tarefa criada a lista tasks
    setTasks([...tasks,task]);
    //Volta o valor do input mostrado na tela a uma string vazia
    input.current.value = "";
  }

  const removeFromList = (id) => {
    //Percorre a lista tasks mantendo os elementos com id diferente daquele que se quer excluir
    setTasks(tasks.filter(task => task.id != id));
  }

  const checkTask = (id) => {
    setTasks(
      //Percorre a lista tasks
      tasks.map(task => {
        //Se for a tarefa desejada, altera o status para o oposto do status atual
        if (task.id === id){
            task.done = !task.done;
        }
        return task;
       })
    );
  };
  
  return (
    <div className="App">
      <h2 className="title">Minha lista de tarefas</h2>
      <form className="input" onSubmit={addToList}>
        <input className="input" ref={input}/>
        <button className="button">Adicionar Tarefa</button>
        <br/>
      </form>
      <Lista tasks={tasks} removeFromList={removeFromList} checkTask={checkTask}/>
    </div>
  );
}