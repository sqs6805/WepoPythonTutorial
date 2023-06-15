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
            <iframe align="center" style={{marginLeft:"40px"}} title='Learning about functions in' src="https://trinket.io/embed/python3/d19782c73e"  width="400" height="356" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
            <br></br>
            <br></br>
            <Card style={{marginLeft:"100px", width:"400px", height:"400px",  backgroundColor:"yellowgreen"}} raised="true"></Card>
            <CardContent>
                    What are Functions?
                </CardContent>
                <CardContent>
                    When coding, it is common to see a repetition of certain parts of code throughout the program. As a result, it becomes easier to delegate functions to carry out different tasks. So, instead of repeating code, a function can be called to complete the task. In general, functions take an imputed value and then output a value, and are meant to perform specified tasks.
                </CardContent>
                <CardContent>
                    Function Invocation
                </CardContent>
            </Grid>
        </div>
)
}
export default Functions 