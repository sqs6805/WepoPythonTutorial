import React from 'react'
import { Typography, Grid, CardContent} from '@mui/material'
import { Card } from '@mui/material'

function Loops(){
    return(
        <div>
            <Typography color="success">
                <h1 align="center" color='success'>Lesson 4: Let's learn about Loops!</h1>
             </Typography>
            <Grid container spacing={2}>
                <Grid item sm ={4}>
                <Card style={{marginLeft:"100px", width:"700px", height:"350px"}} raised="true">
                <CardContent>
                    <Typography>
                        <b>What are Loops and why are they used?</b>
                    </Typography>
                </CardContent>
                    <Typography>
                        <CardContent>
                            A python loop is a sequence of instructions that is continually repeated until a certain condition is reached. There are 2 main types of loops in Python: For loops and While loops. These are explained more in depth on the next card.
                        </CardContent>
                        <CardContent>
                            Loops are important because they allow a programmer to execute blocks of code repeatedly without having to write out the same line of code multiple times. An advantage of using loops is that it increases efficiency and allows code to become more simplified.
                        </CardContent>
                    </Typography>
            </Card>

            <br></br>
            <br></br>

            <iframe align="center" style={{marginLeft:"100px"}} title='Learning about Lists in Python' src= "https://trinket.io/library/trinkets/create?lang=python3"  width="700" height="450" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>

            </Grid>
            <Grid item sm={4}>
            </Grid>
            <Grid item sm={4}>
                <Card style={{backgroundColor:"yellowgreen", width:"500px", height:"675px", marginRight:"100px"}} raised="true">
                    <CardContent>
                        <Typography>
                            <b>Different Types of Loops</b>
                        </Typography>
                    </CardContent>
                    <Typography>
                        <CardContent>
                            <b>For Loops</b> A for loop has a control statement that executes code repeatedly for a particular number of iterations. In this control flow statement, the keyword used is for. The for loop is used when the number of iterations is already known.
                        </CardContent>
                        <CardContent>
                            <b>While Loops()</b> - A loop that executes a single statement or a group of statements for the given true condition. The keyword used to represent this loop is "while". A "while" loop is used when the number of iterations is unknown.
                        </CardContent>
                        <CardContent>
                            <b>How do I know which to use? </b> - For loops are used when we know the number of iterations we want the loop to complete. While Loops are used when we want the loop to continue executing until a specific condition is proved wrong.
                        </CardContent>
                        <CardContent>
                            <b>Common Loop Iterating Techniques</b> - 
                        </CardContent>
                        <CardContent>
                             Run the code in the sandbox and try adding different icecream flavors to the shopping cart. Then type "q" to calculate the total cost. 
                        </CardContent>
                    </Typography>
                </Card>
                <br></br>
                <br></br>
                <br></br>
                <Card style={{backgroundColor:"yellowgreen", width:"500px", height:"150px", marginRight:"100px"}} raised="true">
                    <Typography style={{color:"black"}}>
                    <CardContent>
                        <b>Your turn to modify the sandbox!</b>
                    </CardContent>
                    <CardContent>
                        Print out all the ice cream flavors in the list (using both While Loops and For Loops)
                    </CardContent>
                    </Typography>
                </Card>
                </Grid>
            </Grid>
        </div>
)
}
export default Loops