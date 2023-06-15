import React from 'react'
import { Typography, Grid, Button, CardContent} from '@mui/material'
import { Card } from '@mui/material'

function Debugging(){
    return(
        <div>
            <Typography color="success">
                <h1 align="center" color='success'>Lesson 6: Debugging and Practice Questions!</h1>
             </Typography>
             <Grid container spacing={2}>
                <Grid item sm ={4}>
            <Grid item sm={4}>
                    <Card style={{width: "500px", height:"200px", marginLeft:"35px", backgroundColor:"mistyrose"}} raised="true">
                        <CardContent>
                            <b>What is debugging?</b><b></b>
                        </CardContent>
                        <CardContent>
                            Debugging is the process of going through code in order to fix errors and bugs. It is an unavoidable part of programming; as a result, it is import to learn techniques and rules to effectively debug your code!
                        </CardContent>
                        <CardContent>
                            <b>Click on the Practice Problems button to practice this!</b>
                        </CardContent>
                    </Card>
                    </Grid>
                    </Grid>
                    <br></br>
                    <br></br>
                    <Card style={{marginLeft:"200px", width:"610px", height:"525px", backgroundColor:"mistyrose"}} raised = "true">
                    <CardContent>
                            <b>What are the steps to debugging?</b><b></b>
                        </CardContent>
                        <CardContent>
                            Step 1: Identify what the error is. Three of the most common errors include <b>syntax errors</b> (an error in the structure of the code like a missing parenthesis),
                            <b>semantic errors</b> (when the code still runs but returns the wrong output), and <b>runtime errors</b> (an error that occurs when the code is running like when indexing of a list is out of bounds)
                        </CardContent>
                        <CardContent>
                            Step 2: Find out where the error is. Print statements are useful in figuring out the outputs at different areas of the code, and to help narrow down where the issue is.
                        </CardContent>
                        <CardContent>
                            Step 3: Look at the error and make a plan on how to fix it.
                        </CardContent>
                        <CardContent>
                            Step 4: Fix the code.
                        </CardContent>
                        <CardContent>
                            Step 5: Edit the surrounding code to make sure it wasn't affected by the change of code.
                        </CardContent>
                        <CardContent>
                            Step 6: Check to see if the code runs properly.
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs ={3}>
                <Button href="/Debugging" variant="contained" color="inherit" label="Debugging" size="large" style={{marginLeft:"200px"}}>
                    Practice Problems!
                </Button>
            </Grid>
        </div>

)
}
export default Debugging