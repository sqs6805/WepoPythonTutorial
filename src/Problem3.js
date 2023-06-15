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
                <Grid item sm ={4}>
            
                <iframe align="left" style={{marginLeft:"100px"}} title='Learning about input and output in Python' src="https://trinket.io/embed/python3/2d8507c154"  width="600" height="400" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
                </Grid>
                <Card style={{width: "400px", height:"125px", marginLeft:"265px", backgroundColor:"aliceblue"}} raised="true">
                    <CardContent>
                        <b>Question 3</b>
                    </CardContent>
                    <CardContent>
                        Print the product of num1 and num2.
                    </CardContent>
                </Card>
                </Grid>
                <iframe align="left" style={{marginLeft:"100px"}} title='Learning about input and output in Python' src="https://trinket.io/embed/python3/9045f0188d"  width="600" height="400" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
                <Card style={{width: "400px", height:"125px", marginRight:"550px", backgroundColor:"aliceblue"}} raised="true">
                <CardContent>
                    <b>Question 4</b>
                </CardContent>
                <CardContent>
                    Print the flavor Vanilla from the list.
                </CardContent>
            </Card>
            <Button href="/Problem5" variant="contained" color="inherit" label="Debugging" size="large" style={{marginLeft:"450px"}}>
                    Continue
                </Button>
            <Button href="/Practice" variant="contained" color="inherit" label="Debugging" size="large" style={{marginRight:"600px"}}>
                    Back
                </Button>
        </div>

)
}
export default Problem3