import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDrag } from 'react-dnd'

function AddNewTask({addTaskHandler}) {

  const [value, setValue] = React.useState('')
 
    return (

        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField 
          id="standard-basic" label="Add tasks" variant="standard"
          value={value}
          onChange={(e)=>{
            setValue(e.target.value)
            }} 
            onKeyPress={(e) => { 
              if (e.key === 'Enter') {
                e.preventDefault()
                addTaskHandler(value);
              }
            }}
            />
      </Box>

    )
}

export default AddNewTask
