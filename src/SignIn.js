import React,{useState} from 'react';
import './Login.css'
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from 'formik';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as yup from "yup";

export default  function SignIn() {
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  // console.log(email, password)
  const history = useNavigate();

 
 const Login = async(item) => {
  let result = await 
  fetch("https://loginserver21.herokuapp.com/user/signin",{
      method: 'POST',
      body: JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      }
    })
    result =await result.json()
    localStorage.setItem('user-info',JSON.stringify(result))
    if(result.status.includes('SUCCESS')){
      history('/success')
    }
    else {
      history('/failed')
    }
     console.log(result,'result')
  }

 
const formValidationSchema=yup.object({
  email: yup.string().matches(/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/,'Invalid email').required('No email provided.'),
  password:yup.string()
  .required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
})

const formik = useFormik({
initialValues:{ email: "" , password:"" },
validationSchema : formValidationSchema,
onSubmit :(item) => {
  console.log("onSubmit",item)
  setEmail(item.email)
  setPassword(item.password)
  Login(item)
}})

return(
  <div >
        <form onSubmit={formik.handleSubmit} >
        <Card sx={{ minWidth: 350,minHeight:400,backgroundColor: '#b9b9b9' ,color: 'white' }}className="success-msg">
             <CardContent>
                 <Typography variant="h4" component="div">
                 Hello there,
                 </Typography>
                 <Typography variant="h3" color="text.white">
                    Welcome back.
                </Typography>
                 </CardContent>

               <TextField id="standard-basic" label="Email" sx={{ m: 1, width: '35ch' }} variant="outlined"
                value={formik.values.email}
                name='email'
                type="email"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && formik.errors.email}
                helperText={formik.touched.email && formik.errors.email ? formik.errors.email : " "} />
                < br/>

      <TextField id="standard-basic" label="Password" sx={{ m: 1, width: '35ch' }} variant="outlined"
        value={formik.values.password}
        name="password" 
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Enter your password"
        error={formik.touched.password && formik.errors.password}
        helperText={formik.touched.password && formik.errors.password ? formik.errors.password : " "} />
              <br />
        
      <Button type="submit" variant="contained" color="success" onClick={Login}>
       Login
      </Button>
      <CardContent className="signin-flex">
      <Typography variant="body2" color="text.white">
        Do not have an account,
        </Typography>
           <Typography variant="body2" color="#002884" onClick={() => history('/signup')}>Signup here</Typography>
      </CardContent>
      </Card>
      </form>
    </div>

)

}

