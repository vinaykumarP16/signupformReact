import React from 'react';
import './App.css';
import { Formik, Form}  from 'formik';
import Textfield from './Textfield';
import * as Yup from 'yup';

export default function Signup() {

	const validate= Yup.object({
		Email:Yup.string()
			.email('invalid Email')
			.required('Email is Required'),
		Password:Yup.string()
			.min(8,'password must be atleast 8 characters')
			.required('Password is Required'),	
		CompanyName:Yup.string()
			.max(15,'must be 15 characters or less')	
			.required('Company name is Required'),	
	})

	const mybutton={
		  width: '250px',
		  height: '40px',
		  borderRadius: '5px',
		  border: 'none',
		  backgroundColor: '#f04037',
		  color:'#ffff',
		  cursor:'pointer',
		  margin:'auto'
	}	

	const mydiv={
		width:'100%',
		display:'flex',
		flexDirection:'row',
		margin:'5px'
	}



	return (
		<Formik initialValues={{
			Email:'',
			CompanyName:'',
			Password:'',
			condition:false
		}}
			validationSchema={validate}
			onSubmit={values=>{
				console.log(values);
				alert('check console.log');
			}}
		>
			{formik=>(
				<div className="myform">
					<h1>Sign Up</h1>
					<h6>No credit card required</h6>
					
					<Form>
						<Textfield label="Email" name="Email" type="text" placeholder="Email address"/>
						<Textfield label="Company Name" name="CompanyName" type="text" placeholder="Company name"/>
						<Textfield label="Password" name="Password" type="Password" placeholder="Password"/>
						<button style={mybutton} type="submit">Get Started</button>
					</Form>
					<p>Already have an account? <a href=""> Sign in</a> </p>	
				</div>
				)}
		</Formik>
	)
}