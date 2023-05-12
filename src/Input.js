import React from 'react'
import { Typography, Grid, CardContent } from '@mui/material'
import { Card } from '@mui/material'

function Input(){
    return(
        <div>
            <Typography color="success">
                <h1 align="center" color='success'>Variables, Data Types, Comments, Input and Output</h1>
             </Typography>
            <Grid container spacing={2}>
                <Grid item sm ={8}>
            <iframe align="center"  title='Learning about input and output in Python' src="https://trinket.io/embed/python3/860e806044"  width="600" height="400" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
            </Grid>
            <Grid item sm={4}>
                <Typography color="Primary" variant="h6" align="left">
                Different types of data types:
                </Typography>
                <Card>
                    <CardContent>This is my card!</CardContent>
                </Card>
                </Grid>
            </Grid>
        </div>
)
}
export default Input