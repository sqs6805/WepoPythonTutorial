import React from 'react'
import { Typography, Grid, CardContent} from '@mui/material'
import { Card } from '@mui/material'

function Functions(){
    return(
        <div>
            <Typography color="success">
                <h1 align="center" color='success'>Lesson 5: Let's learn about Functions!</h1>
             </Typography>
            <Grid container spacing={2}>
                <Grid item sm ={4}>
            </Grid>
            <iframe align="center" style={{marginLeft:"40px"}} title='Learning about functions in' src="https://trinket.io/embed/python3/d19782c73e"  width="100" height="356" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
            <br></br>
            <br></br>
            <Card style={{marginLeft:"100px", width:"400px", height:"400px",  backgroundColor:"yellowgreen"}} raised="true"></Card>
            <CardContent>
                    Try yourself!
                </CardContent>
                <CardContent>
                    Try creating an input yourself now! Ask the user to enter their favorite ice cream flavor. 
                </CardContent>
                <CardContent>
                    Do this my modifying the sandbox and writing your own code! 
                </CardContent>
            </Grid>
        </div>
)
}
export default Functions 