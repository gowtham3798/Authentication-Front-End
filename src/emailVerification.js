import React from 'react';
// import {useHistory} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './AuthenticationApp.css'


export default function EmailVerification() {
    const history = useNavigate()
  return (
    <div >
         <Card sx={{ minWidth: 500,minHeight:150,backgroundColor: '#a6a6a6' ,color: 'white' }}className="success-msg">
             <CardContent>
                 <Typography variant="h4" component="div">
                 ✅Congratulations, your account has been successfully created.
                 </Typography>
                 <hr></hr>
                 {/* <Typography variant="h5" component="div">
                 Please click on the link that has been sent to your email account to verify your email and continue the registration process.
                 </Typography> */}
                 <Button onClick={() => history('/signin')} color="success" id="contBtn">Continue</Button>
             </CardContent>
             <CardActions className="success-msg-btn">
      </CardActions>
         </Card>
        </div>
  )
}
