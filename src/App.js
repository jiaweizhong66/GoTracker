import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import Add from './components/Add'

function App() {
  const [tasks, setTasks] = useState([])

  const [showForm, setShowForm] = useState(false)


  // add a task
  const addTask = (task) => {
    console.log(task)
    const id = Math.floor(Math.random() * 100) + 1
    console.log(id)
    const newTask = { id, ...task }
    console.log(newTask.time)
    setTasks([...tasks, newTask])
  }

  // delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => (task.id !== id)))
  }

  // reset reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id 
    ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
     <Header onAdd={() => setShowForm(!showForm)} />
     {showForm === true && <Add onAdd={addTask}/>}
     {tasks.length === 0 ? "No tasks, add some tasks" : <Tasks tasks={tasks} 
     onDelete={deleteTask} onToggle={toggleReminder} />}
    </div>
  );
}

export default App;
