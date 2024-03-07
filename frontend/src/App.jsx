import { useEffect, useState } from 'react'
import InputField from './components/InputField'
import Task from './components/Task'
import axios from 'axios'
import URL from '../config'

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const getTasksData = () => {
    setLoading(true)
    axios
      .get(URL)
      .then(res => res.data)
      .then(data => setTasks(data))
      .catch(error => console.log(error));
    setTimeout(() => {
      setLoading(false)
    }, 200);
  }
  useEffect(() => {
    getTasksData();
  }, [])


  return (
    <div className="wrapper d-flex justify-content-center align-items-center bg-dark-subtle">
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6 main-col bg-light rounded p-3 ">
            <div className="row">
              <div className="col-12">
                <InputField updateData={getTasksData} />
              </div>
              <div className="col-12 mt-3 d-grid" style={{ gap: "5px" }}>
                {
                  tasks.map((taskObj) => <Task key={taskObj._id} isLoading={loading} updateFunction={getTasksData} task={taskObj.todo} id={taskObj._id} completed={taskObj.completed} />)
                }
              </div>
              <div className="col-12"></div>
            </div>
          </div>
          <div className="col-3"></div>

        </div>
      </div>
    </div>
  )
}

export default App
