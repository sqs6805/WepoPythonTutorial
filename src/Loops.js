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
                <Card style={{marginLeft:"100px", width:"700px", height:"275px", backgroundColor:"yellowgreen"}} raised="true">
                <CardContent>
                    <Typography>
                        <b>What are Loops and why are they used?</b>
                    </Typography>
                </CardContent>
                    <Typography>
                        <CardContent>
                            A python loop is a sequence of instructions that is <b>continually repeated</b> until a certain condition is reached. There are 2 main types of loops in Python: <b>For Loops</b> and <b>While Loops</b>. These are explained more in depth on the next card.
                        </CardContent>
                        <CardContent>
                            Loops are important because they allow a programmer to execute blocks of code repeatedly without having to write out the same line of code multiple times. An advantage of using loops is that it <b>increases efficiency</b> and allows code to become <b>more simplified</b>.
                        </CardContent>
                    </Typography>
            </Card>

            <br></br>
            <br></br>

            <iframe align="center" style={{marginLeft:"100px"}} title='Learning about Loops in Python' src= "https://trinket.io/embed/python/15078468c5?toggleCode=true"  width="700" height="500" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>

            </Grid>
            <Grid item sm={4}>
            </Grid>
            <Grid item sm={4}>
                <Card style={{backgroundColor:"yellowgreen", width:"400px", height:"600px", marginRight:"50px"}} raised="true">
                    <CardContent>
                        <Typography>
                            <b>Different Types of Loops</b>
                        </Typography>
                    </CardContent>
                    <Typography>
                        <CardContent>
                            <b>For Loops</b> - A loop with a control statement that executes code repeatedly for a particular number of iterations. In this control flow statement, the keyword used is <b>"for"</b>. The for loop is used when the <b>number of iterations is already known</b>.
                        </CardContent>
                        <CardContent>
                            <b>While Loops</b> - A loop that executes a single statement or a group of statements for the given true condition. The keyword used to represent this loop is <b>"while"</b>. The while loop is used when the <b>number of iterations is unknown</b>.
                        </CardContent>
                        <CardContent>
                            <b>How do I know which to use? </b> - <b>For loops</b> are used when we know the number of iterations we want the loop to complete. <b>While loops</b> are used when we want the loop to continue executing until a specific condition is proved wrong.
                        </CardContent>
                        <CardContent>
                             Run the code in the sandbox to see how a while loop can be used to print icecream flavors in a list. 
                        </CardContent>
                    </Typography>
                </Card>
                <br></br>
                <br></br>
                <br></br>
                <Card style={{backgroundColor:"yellowgreen", width:"400px", height:"110px", marginRight:"100px"}} raised="true">
                    <Typography style={{color:"black"}}>
                    <CardContent>
                        <b>Your turn to modify the sandbox!</b> - Print out all the ice cream flavors in the list using a <b>for loop</b>. The while loop was already done for you.
                    </CardContent>
                    </Typography>
                </Card>
                </Grid>
            </Grid>
        </div>
)
}
export default Loops