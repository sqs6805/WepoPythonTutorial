import React from 'react'
import { Typography, Grid, Button, CardContent} from '@mui/material'
import { Card } from '@mui/material'

function Problem7(){
    return(
        <div>
        <Typography color="success">
            <h1 align="center" color='success'>Edit the Sandbox to Correct the Error!</h1>
         </Typography>
         <Grid item sm = {2}>
         <Button href="/Problem5" variant="contained" color="inherit" label="Debugging" size="large" style={{marginLeft:"100px"}}>
                    Back
                    </Button>
                <Button href="/Problem9" variant="contained" color="inherit" label="Debugging" size="large" style={{marginLeft:"450px"}}>
                    Continue
                    </Button>
                <Button href="/App" variant="contained" color="inherit" label="Debugging" size="large" style={{marginLeft:"450px"}}>
                    Homepage
                    </Button>
                </Grid>
         <Grid container spacing={2}>
                <Grid item sm={7} align="center">
                    <br></br>
                    <br></br>
            <iframe align="center" style={{marginLeft:"40px"}} title='Learning about functions in' src="https://trinket.io/embed/python3/9576c6b4e3"   width="600" height="400" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
            </Grid>
            <Grid item sm={5}>
                <Card style={{marginTop:"75px", width:"300px", height:"150px", backgroundColor:"white"}}>
                <CardContent>
                        <b>Question 7</b>
                    </CardContent>
                    <CardContent>
                        Print the average of x and y.
                    </CardContent>
            </Card>
            </Grid>
            </Grid>
            <br></br>
            <br></br>
            <Grid container spacing={2}>
                <Grid item sm={7} align="center">
                    <br></br>
                    <br></br>
            <iframe align="center" style={{marginLeft:"40px"}} title='Learning about functions in' src="https://trinket.io/embed/python3/4fe4821b62"   width="600" height="400" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
            </Grid>
            <Grid item sm={5}>
                <Card style={{marginTop:"75px", width:"300px", height:"150px", backgroundColor:"white"}}>
                <CardContent>
                    <b>Question 8</b>
                </CardContent>
                <CardContent>
                    Print the numbers from count to 0.
                </CardContent>
            </Card>
            </Grid>
            </Grid>
            <br></br>
            <br></br>

    </div>

)
}
export default Problem7