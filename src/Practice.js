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
                    <Grid item sm={7} align="center">
                        <br></br>
                        <br></br>
                <iframe align="center" style={{marginLeft:"40px"}} title='Learning about functions in' src="https://trinket.io/embed/python3/960679b04a"  width="600" height="400" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
                </Grid>
                <Grid item sm={5}>
                    <Card style={{marginTop:"75px", width:"300px", height:"150px", backgroundColor:"silver"}}>
                    <CardContent>
                        <b>Question 1</b>
                    </CardContent>
                    <CardContent>
                        Print every ice-cream flavor.
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
                <iframe align="center" style={{marginLeft:"40px"}} title='Learning about functions in' src="https://trinket.io/embed/python3/6771db41f6"   width="600" height="400" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
                </Grid>
                <Grid item sm={5}>
                    <Card style={{marginTop:"75px", width:"300px", height:"150px", backgroundColor:"silver"}}>
                    <CardContent>
                    <b>Question 2</b>
                </CardContent>
                <CardContent>
                    Print out the four ice-cream flavors and the costs of each.
                </CardContent>
                </Card>
                </Grid>
                </Grid>
                <br></br>
                <br></br>

            <Button href="/Debugging" variant="contained" color="inherit" label="Debugging" size="large" style={{marginRight:"600px"}}>
                    Back
                </Button>
            <Button href="/Problem3" variant="contained" color="inherit" label="Debugging" size="large" style={{marginLeft:"450px"}}>
                Continue
            </Button>
        </div>

)
}
export default Practice