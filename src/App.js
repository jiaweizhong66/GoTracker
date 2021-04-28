import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Bball',
        day: 'Feb23 at 6',
        reminder: true,
    },
    {
        id: 2,
        text: 'Lecture',
        day: 'Feb23 at 10am',
        reminder: true,
    },
  ])

  // delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => (task.id !== id)))
  }

  // Reminder
  const toggleReminder = (id) => {
    console.log(id)
  }

  return (
    <div className="container">
     <Header />
     {tasks.length === 0 ? "No tasks, add some tasks" : <Tasks tasks={tasks} 
     onDelete={deleteTask} onToggle={toggleReminder} />}
    </div>
  );
}

export default App;
