import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { PropTypes } from "prop-types";
import axios from 'axios'
import URL from '../../config'
function InputField({ updateData }) {
  const [text, setText] = useState('');
  const addTask = async () => {
    await axios
      .post(URL, { todo: text }, {
        headers: {
          'content-type': 'application/json'
        }
      })
    updateData();
    setText('');
  }
  return (
    <div className="d-flex justify-content-between">
      <TextField id="outlined-basic" className='w-100 me-2' label="Outlined" variant="outlined" value={text} onChange={(event) => setText(event.target.value)} />
      <Button variant="contained" endIcon={<SendIcon />} className='ps-5 pe-5 fw-semibold fs-6' onClick={addTask}>
        Add
      </Button>
    </div>
  )
}
InputField.propTypes = {
  updateData: PropTypes.func
}
export default InputField