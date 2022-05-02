import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import {StyledTitle,StyledSubTitle,StyledButton,ButtonGroup} from './../loginComponent/styles'

const Home = () => {
    const history = useNavigate()
    return(
        <div>
            <Card sx={{ minWidth: 650,minHeight:250 ,backgroundColor: '#a6a6a6' ,color: 'white',justifyContent: 'center'}}className="success-msg">
             <CardContent sx={{marginTop:3}}>
                 <Typography variant="h3" component="div">
                 welcome to our site
                 </Typography>
                 <Typography variant="h4" component="div">
                 feel free to explore
                 </Typography>
             </CardContent>
             <CardActions className="success-msg-btn">
        {/* <Button size="small" onClick={() =>history('/signin')} variant="outlined">Login</Button> */}
            <Button onClick={() => history('/signin')} variant="outlined">Login</Button>
            <Button onClick={() =>history('/signup')} variant="outlined">SignUp</Button>
      </CardActions>
         </Card>
    
        </div>
    )
}

export default Home