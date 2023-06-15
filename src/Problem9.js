import React from 'react'
import { Typography, Grid, Button, CardContent} from '@mui/material'
import { Card } from '@mui/material'

function Problem7(){
    return(
        <div>
            <Typography color="success">
                <h1 align="center" color='success'>Edit the Sandbox to Correct the Error!</h1>
             </Typography>
             <Grid container spacing={2}>
                <Grid item sm ={4}>
            
                <iframe align="left" style={{marginLeft:"100px"}} title='Learning about input and output in Python' src="https://trinket.io/embed/python3/baa6659fa3"  width="600" height="400" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
                </Grid>
                <Card style={{width: "400px", height:"125px", marginLeft:"265px", backgroundColor:"lemonchiffon"}} raised="true">
                    <CardContent>
                        <b>Question 9</b>
                    </CardContent>
                    <CardContent>
                        Print the product of all real numbers till 10.
                    </CardContent>
                </Card>
                </Grid>
                <iframe align="left" style={{marginLeft:"100px"}} title='Learning about input and output in Python' src="https://trinket.io/embed/python3/a6a3f860d3"  width="600" height="400" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
                <Card style={{width: "400px", height:"125px", marginRight:"550px", backgroundColor:"lemonchiffon"}} raised="true">
                <CardContent>
                    <b>Question 10 (Bonus!)</b>
                </CardContent>
                <CardContent>
                    Return true if the sum of num three times is 0.3.
                </CardContent>
            </Card>
            <Button href="/Problem7" variant="contained" color="inherit" label="Debugging" size="large" style={{marginRight:"600px"}}>
                    Back
                </Button>
        </div>

)
}
export default Problem7