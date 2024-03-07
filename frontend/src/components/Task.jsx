import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { PropTypes } from "prop-types";
import axios from 'axios'
import URL from '../../config'
import { useState } from 'react';
import Skeleton from '@mui/material/Skeleton';

function Task({ isLoading, updateFunction, task, completed, id }) {
  const [taskCompleted, setTaskCompleted] = useState(completed);
  const toggleCompleted = async (id) => {
    try {
      await axios.put(URL, { id })
      setTaskCompleted(!taskCompleted)
    } catch (error) {
      console.log(error);
    }
  }
  const onDelete = async (id) => {
    await axios.delete(`${URL}/${id}`);
    updateFunction();
  }
  return (
    <>
      {isLoading ? <Skeleton animation="wave" variant="rectangular" width="100%" height={55} /> :
        <div className="task w-100 border d-flex justify-content-between ps-2 pe-3 align-items-center bg-light-subtle">
          <div className="leftPart d-flex">
            <Checkbox
              sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
              checked={taskCompleted}
              onClick={() => toggleCompleted(id)}
            />
            <span className="task fs-5 fw-semibold d-flex justify-content-center align-items-center">
              {task}
            </span>
          </div>
          <div className="rightPart d-flex">
            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => onDelete(id)}>
              Delete
            </Button>
          </div>
        </div>}
    </>
  )
}
Task.propTypes = {
  updateFunction: PropTypes.func,
  task: PropTypes.string,
  completed: PropTypes.bool,
  isLoading: PropTypes.bool,
  id: PropTypes.string
}

export default Task