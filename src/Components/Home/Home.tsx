import React, {useState, useRef} from 'react'
import './Home.scss'
import letterM from '../../assets/images/letterM.jpeg'

type FormElement = React.FormEvent<HTMLFormElement>
interface TasksProps {
  name: string;
  done: boolean;
}

const Home = () => {

  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] =  useState<TasksProps[]>([]);
  const taskInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask('');
    taskInput.current?.focus();
  };

  const addTask = (name: string) => {
   const newTasks:TasksProps[] = [...tasks, {name, done: false}]
   setTasks(newTasks);
  };

  const toggleDoneTask = (i: number) => {
    const newTasks: TasksProps[] = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
  };

  const removeTask = (i: number) => {
    const newTasks: TasksProps[] = [...tasks];
    newTasks.splice(i,1);
    setTasks(newTasks);
  }
  return (
    <>
    <div className='Container'>
      <div className='rowclass'>
        <img src={letterM} alt='logoIMG' className='logoImg'/>
        <div >
            <form onSubmit={handleSubmit} className='colClass'>
              <input type='text' 
              onChange={e => setNewTask(e.target.value)} 
              value={newTask} 
              className='inputStyle'
              ref={taskInput}
              autoFocus
              />
              <button className='btnHome'>
                Save
              </button>
            </form>
            {
              tasks.map((t: TasksProps, i: number) => {
                return (
                  <div className='answerCont' key={i}>
                    <h2 style={{textDecoration: t.done ? 'line-through' : ''}}>{t.name}</h2>
                    <div>
                      <button className='btnSecondary' onClick={() => toggleDoneTask(i)}>
                        {t.done ? '✓' : '✗'}
                      </button>
                      <button className='btnBasket' onClick={() => removeTask(i)}>
                      🗑
                      </button>
                    </div>
                  </div>
                )
              })
            }
        </div>
      </div>
    </div>
    </>
  )
}

export default Home