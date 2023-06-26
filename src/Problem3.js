import React from 'react'
import { Typography, Grid, Button, CardContent} from '@mui/material'
import { Card } from '@mui/material'

function Problem3(){
    return(
        <div>
            <Typography color="success">
                <h1 align="center" color='success'>Edit the Sandbox to Correct the Error!</h1>
             </Typography>
             <Grid container spacing={2}>
                    <Grid item sm={7} align="center">
                        <br></br>
                        <br></br>
                <iframe align="center" style={{marginLeft:"40px"}} title='Learning about functions in' src="https://trinket.io/embed/python3/2d8507c154"  width="600" height="400" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
                </Grid>
                <Grid item sm={5}>
                    <Card style={{marginTop:"75px", width:"300px", height:"150px", backgroundColor:"silver"}}>
                <CardContent>
                <b>Question 3</b>
                </CardContent>
                <CardContent>
                        Print the product of num1 and num2.
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
                <iframe align="center" style={{marginLeft:"40px"}} title='Learning about functions in' src="https://trinket.io/embed/python3/9045f0188d"   width="600" height="400" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
                </Grid>
                <Grid item sm={5}>
                    <Card style={{marginTop:"75px", width:"300px", height:"150px", backgroundColor:"silver"}}>
                    <CardContent>
                    <b>Question 4</b>
                    </CardContent>
                    <CardContent>
                    Print the flavor Vanilla from the list.
                    </CardContent>
                </Card>
                </Grid>
                </Grid>
                <br></br>
                <br></br>

            <Button href="/Practice" variant="contained" color="inherit" label="Debugging" size="large" style={{marginRight:"600px"}}>
                    Back
                </Button>
            <Button href="/Problem5" variant="contained" color="inherit" label="Debugging" size="large" style={{marginLeft:"450px"}}>
                Continue
            </Button>
        </div>

)
}
export default Problem3