import React from 'react'
import { Typography, Grid, Button, CardContent} from '@mui/material'
import { Card } from '@mui/material'

function Problem5(){
    return(
        <div>
            <Typography color="success">
                <h1 align="center" color='success'>Edit the Sandbox to Correct the Error!</h1>
             </Typography>
             <Grid container spacing={2}>
                <Grid item sm ={4}>
            
                <iframe align="left" style={{marginLeft:"100px"}} title='Learning about input and output in Python' src="https://trinket.io/embed/python3/2238659c3e"  width="600" height="400" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
                </Grid>
                <Card style={{width: "400px", height:"125px", marginLeft:"265px", backgroundColor:"burlywood"}} raised="true">
                    <CardContent>
                        <b>Question 5</b>
                    </CardContent>
                    <CardContent>
                        Print the multiples of 2 up until 5.
                    </CardContent>
                </Card>
                </Grid>
                <iframe align="left" style={{marginLeft:"100px"}} title='Learning about input and output in Python' src="https://trinket.io/embed/python3/a8fd3ed873"  width="600" height="400" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
                <Card style={{width: "400px", height:"125px", marginRight:"550px", backgroundColor:"burlywood"}} raised="true">
                <CardContent>
                    <b>Question 6</b>
                </CardContent>
                <CardContent>
                    Print the amount of cones left in a stock after a cone is bought.
                </CardContent>
            </Card>
            <Button href="/Problem7" variant="contained" color="inherit" label="Debugging" size="large" style={{marginLeft:"450px"}}>
                    Continue
                </Button>
            <Button href="/Problem3" variant="contained" color="inherit" label="Debugging" size="large" style={{marginRight:"600px"}}>
                    Back
                </Button>
        </div>

)
}
export default Problem5