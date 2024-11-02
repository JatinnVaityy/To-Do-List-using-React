import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tasks from './Tasks'

const items = () => {
  let list = localStorage.getItem('list')
  console.log(list)
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}
function App() {

  const [task, settask] = useState(items())
  const [todo, settodo] = useState('')
  const [description, setdescription] = useState('')
  console.log(todo, description)
  const SubmitHandle = (e) => {
    e.preventDefault();
    if (!todo || !description) {
      alert("OOPS ! Add Your Task First !!")
    } else {
      settask([...task, { todo, description }])
      settodo('');
      setdescription('');
    }

  }


  const removee = (index) => {
    const filteredarr = task.filter((val, i) => {
      return i !== index
    })
    settask(filteredarr)

  }
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(task))
  }, [task])
  const removeall = () => {
    settask([])
  }




  return (

    <>
      <div >

        <h1
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            color: 'black'
          }}>
          To-Do List</h1>

        <div className='center'>

          <form onSubmit={SubmitHandle}>
            <input
              type="text"
              placeholder='Add Your Tasks'
              value={todo}
              onChange={(e) => settodo(e.target.value)}

            />
            <br />
            <input
              type="text"
              placeholder='Task Description'
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            />
            <br />

            <button type='submit' className='btn1'>
              Click Here to Add Task</button>
            <br />
            <button
              type='button'
              className='btn1 btn'
              onClick={removeall}

            >Remove All Task</button>

            <p style={{
              textAlign: 'center',
              marginTop: '20px',
              fontSize: '18px',
              color: '#333',
              fontWeight: 'bold'

            }}>
              Tasks to Complete : {task.length}
            </p>
          </form>
        </div>

        {task.map((item, index) => (
          <Tasks
            key={index}
            todo={item.todo}
            description={item.description}
            removee={removee}
            index={index}
            removeall={removeall}
          />
        ))}

      </div>

    </>

  )
}

export default App
