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
            <Grid item sm={4}>
                    <Card style={{width: "500px", height:"500px", marginLeft:"35px", backgroundColor:"mintcream"}} raised="true">
                        <CardContent>
                            <b>What are Functions?</b><b></b>
                        </CardContent>
                        <CardContent>
                            When coding, it is common to see a repetition of certain parts of code throughout the program. As a result, it becomes easier to delegate functions to carry out different tasks. So, instead of repeating code, a function can be called to complete the task. <i>In general, functions take an inputed value and then output a value, and are meant to perform specified tasks.</i>
                        </CardContent>
                        <CardContent>
                            <b>What is Function Invocation?</b><b></b>
                        </CardContent>
                        <CardContent>
                            Functions are invoked by stating the name of the function followed by parentheses which contain the inputs to the function. 
                            For functions with multiple inputs, separate them with commas.
                        </CardContent>
                        <CardContent>
                        <i> For example, a function, called “IceCreamCost” that has one input, ice cream flavor, and one output, the cost, would be invoked like this:
                            IceCreamCost(flavor).</i> 
                        </CardContent>
                    </Card>
                    </Grid>
                    </Grid>
                    <br></br>
                    <br></br>
                    <Card style={{marginLeft:"200px", width:"610px", height:"600px", backgroundColor:"mintcream"}} raised = "true">
                        <CardContent>
                            <b>Defining vs Calling Function</b>
                        </CardContent>
                        <CardContent>
                            Defining a function is done by using the keyword, def following by the function name with the inputs in parenthesis inside.
                            <i>For example, Def IceCreamCost(flavor) </i> Calling function: IceCreamCost(flavor)
                        </CardContent>
                        <CardContent>
                            Calling a function is done from a separate function and it involves using the function name with the inputs in parenthesis inside. 
                            <i>For example, IceCreamCost(flavor)</i>
                        </CardContent>
                        <CardContent>
                            <b>Arguments and Parameters</b>
                        </CardContent>
                        <CardContent>
                            An argument is the term for a value that is passed into a function via a function invocation. A parameter is one of the variables in the actual function definition.
                            For example: IceCreamCost(flavor) -> flavor is an argument and Def IceCreamCost(flavor): -> flavor is a parameter.
                        </CardContent>
                        <CardContent>
                            <b>Return vs Print</b>
                        </CardContent>
                        <CardContent>
                        Return is a keyword that stops the function from continuing and then “returns” the value back to where it was called from. When returning a value, the value will have to be printed inside the function which called it. 
                            Print is a function the prints out the value for humans to see. It will not have to be printed within the function it was called from. 
                        </CardContent>

                        <CardContent>

                        </CardContent>
                    </Card>
                    <br></br>
                    <br></br>
                    <br></br>
                    <iframe align="center" style={{marginLeft:"40px"}} title='Learning about functions in' src="https://trinket.io/embed/python3/2f76acfe3d"  width="600" height="400" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
                    <Card style={{width: "400px", height:"220px", marginLeft:"35px", backgroundColor:"silver"}} raised="true">
                    <CardContent>
                        <b>Your turn to try and modify the sandbox!</b>
                    </CardContent>
                    <CardContent>
                        Try and alter the different variables, iceCream_flavors, total_money, cost_per_cone, cones, and see the variety of different outputs!
                    </CardContent>
                    <CardContent>
                        <b> Note how much easier it is to get different outputs and only needing alter a few variables</b>
                    </CardContent>
                </Card>
                </Grid>
        </div>
)
}
export default Functions 