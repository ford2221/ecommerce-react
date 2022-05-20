import React from 'react';
import { TextField, Grid } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form';


const FormInput = ({ name, label }) => {
  const { control } = useForm();

  return (
    <Grid item xs={12} sm={6}>
      <Controller 
        //as={TextField}
        control={control}
        
        name={name}
        render = {({field }) => (
          <TextField 
            defaultValue=""
            label = { label }
            required
            fullwidth="true"
          />
        )}
        
      />
    </Grid>
  );
}

export default FormInput
