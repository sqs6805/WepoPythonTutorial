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
                <Grid item sm={4}>
                    <Card style={{marginLeft:"100px", width:"600px", height:"560px", backgroundColor:"yellowgreen"}}>
                    <CardContent>
                   <b>What are Functions?</b><b></b>
                   </CardContent>
                   <CardContent>
                   When coding, it is common to see a repetition of certain parts of code throughout the program. <i>In general, functions take an inputed value and then output a value, and are meant to perform specified tasks.</i>
                   </CardContent>
                   <CardContent>
                   <b>What is Function Invocation?</b><b></b>
                   </CardContent>
                   <CardContent>
                   - Functions are invoked by stating the name of the function followed by parentheses which contain the inputs to the function. 
                   </CardContent>
                   <CardContent>
                   - For functions with multiple inputs, separate them with commas.
                   </CardContent>
                   <CardContent>
                        <i> For example, a function, called “IceCreamCost” that has one input, ice cream flavor, and one output, the cost, would be invoked like this:
                            IceCreamCost(flavor).</i> 
                    </CardContent>
                </Card>
                </Grid>
                <br></br>
                <br></br>
                <Grid item sm={4}>
                <Card style={{marginLeft:"290px", width:"590px", height:"560px", backgroundColor:"yellowgreen"}}>
                <CardContent>
                    <b>Defining vs Calling Function</b>
                    </CardContent>
                    <CardContent>
                        - Defining a function is done by using the keyword, def following by the function name with the inputs in parenthesis inside.              
                        <br></br>  
                        <br></br>                  
                        - Calling a function is done from a separate function and it involves using the function name with the inputs in parenthesis inside. 
                    </CardContent>
                    <CardContent>
                        <b>Arguments vs Parameters</b>
                    </CardContent>
                    <CardContent>
                        - An argument is the term for a value that is passed into a function via a function invocation. 
                        <br></br>
                        <br></br>
                        - A parameter is one of the variables in the actual function definition.
                    </CardContent>
                    <CardContent>
                        <b>Return vs Print</b>
                    </CardContent>
                    <CardContent>
                        - Return is a keyword that stops the function from continuing and then “returns” the value back to where it was called from. Return is used when the value does not need to be immediately printed out, and instead, saved to a variable to be used.
                        <br></br>
                        <br></br>
                        - Print is a function the prints out the value for humans to see. It will now not have to be printed within the function it was called from. 
                    </CardContent>
                    <CardContent>
                    </CardContent>
                </Card>
                </Grid>
                 </Grid>
                <Grid container spacing={2}>
                    <Grid item sm={7} align="center">
                        <br></br>
                        <br></br>
                <iframe style={{marginRight:"80px"}} title='Learning about functions in' src="https://trinket.io/embed/python3/23b4bcfc78"  width="750" height="400" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
                <br></br>
                <br></br>
                </Grid>
                <Grid item sm={5}>
                    <Card style={{marginTop:"100px", width:"400px", height:"300px", backgroundColor:"yellowgreen"}}>
                <CardContent>
                <b>Your turn to try and modify the sandbox!</b> Try and alter the different variables and function and see the variety of different outputs!
                </CardContent>
  
                <CardContent>
                <b> Practice! </b> Now try altering the code by creating a new function that subtracts an amount of ice-cream cones from the store's total supply
                </CardContent>
                <CardContent>
                    <b> Note. This can be done many different ways. Try to experiment and create different variables!</b>
                </CardContent>
                    </Card>
                </Grid>
                </Grid>
        </div>
)
}
export default Functions 