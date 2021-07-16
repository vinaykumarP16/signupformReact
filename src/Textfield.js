import React from 'react';
import { ErrorMessage, useField } from 'formik';
import './App.css';

export default function Textfield({label, ...props}) {
	const [field,meta]=useField(props);
	console.log(field,meta);

	const mytext={
		width: '250px',
  		height: '40px',
  		margin:'5px',
  		border:'none',
  		display:'flex',
  		flexDirection:'column'
	}



	return (
		<div>
			<input className style={mytext} {...field} {...props}/>
			<ErrorMessage name={field.name} component="div" className="error"/>
		</div>
	)
}