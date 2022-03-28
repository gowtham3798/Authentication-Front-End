import React from 'react';
// import {useHistory} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './App.css'


export default function Success() {
    const history = useNavigate()
  return (
    <div >
         <Card sx={{ minWidth: 500,minHeight:150,backgroundColor: '#a6a6a6' ,color: 'white' }}className="success-msg">
             <CardContent>
                 <Typography variant="h4" component="div">
                 Your account has been logged in Successfully.
                 </Typography>
             </CardContent >
                 <AccountCircleIcon sx={{ minWidth: 500,minHeight:150,backgroundColor: '#a6a6a6' ,color: '#5c5f5c' }}/>
             <CardActions className="success-msg-btn">
        <Button size="small" onClick={() =>history('/signin')} variant="outlined">Logout</Button>
      </CardActions>
        </Card>
        </div>
  )
}
