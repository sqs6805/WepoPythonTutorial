import React from 'react'
import { Typography, Grid, Button, CardContent} from '@mui/material'
import { Card } from '@mui/material'

function Practice(){
    return(
        <div>
            <Typography color="success">
                <h1 align="center" color='success'>Edit the Sandbox to Correct the Error!</h1>
             </Typography>
             <Grid container spacing={2}>
                <Grid item sm ={4}>
            
                <iframe align="left" style={{marginLeft:"100px"}} title='Learning about input and output in Python' src="https://trinket.io/embed/python3/960679b04a"  width="600" height="400" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
                </Grid>
                <Card style={{width: "400px", height:"125px", marginLeft:"265px", backgroundColor:"silver"}} raised="true">
                    <CardContent>
                        <b>Question 1</b>
                    </CardContent>
                    <CardContent>
                        Print every ice-cream flavor.
                    </CardContent>
                </Card>
                </Grid>
                <iframe align="left" style={{marginLeft:"100px"}} title='Learning about input and output in Python' src="https://trinket.io/embed/python3/6771db41f6"  width="600" height="400" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
                <Card style={{width: "400px", height:"125px", marginRight:"550px", backgroundColor:"silver"}} raised="true">
                <CardContent>
                    <b>Question 2</b>
                </CardContent>
                <CardContent>
                    Print out the four ice-cream flavors and the costs of each.
                </CardContent>
            </Card>
            <Button href="/Problem3" variant="contained" color="inherit" label="Debugging" size="large" style={{marginLeft:"450px"}}>
                    Continue
                </Button>
            <Button href="/Debugging" variant="contained" color="inherit" label="Debugging" size="large" style={{marginRight:"600px"}}>
                    Back
                </Button>
        </div>

)
}
export default Practice