import React from 'react'
import { Typography, Grid, Button, CardContent} from '@mui/material'
import { Card } from '@mui/material'

function Loops(){
    return(
        <div>
            <Typography color="success">
                <h1 align="center" color='success'>Lesson 4: Let's learn about Loops!</h1>
             </Typography>
            <Grid container spacing={2}>
                <Grid item sm ={4}>
                <Card style={{marginLeft:"100px", width:"700px", height:"350px", backgroundColor:"white"}} raised="true">
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
                        <CardContent>
                            A <b>":"</b> must be placed after the first line of each loop. This indicates the sart of an indented block of code.
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
                <Card style={{backgroundColor:"white", width:"400px", height:"580px", marginRight:"50px"}} raised="true">
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
                <Card style={{backgroundColor:"white", width:"400px", height:"225px", marginRight:"100px"}} raised="true">
                    <Typography style={{color:"black"}}>
                    <CardContent>
                        <b>Your turn to modify the sandbox!</b> - Print out all the ice cream flavors in the list using a <b>for loop</b>. The while loop was already done for you.
                    </CardContent>
                    <CardContent>
                        <b>Notes: len()</b> is a list function we saw in the last lesson, feel free to go back and review it if you are confused! <b>"i"</b> is a variable place holder used to track the amount of times the loop is traversed.
                    </CardContent>
                    </Typography>
                </Card>
                <br></br>
                <br></br>
                <Grid item sm = {4}>
                    <Button  align = "center" href="/App" variant="contained" color="inherit" label="Debugging" size="extralarge" style={{marginLeft:"150px"}}>
                        Homepage
                        </Button>
                    </Grid>
                </Grid>
                <br></br>
                <br></br>
            </Grid>
        </div>
)
}
export default Loops