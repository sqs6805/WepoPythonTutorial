import React from 'react';
import { CardContent, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import {Card} from '@mui/material';

function Conditionals(){
    return(
        <div>
            <br></br>
            <br></br>
            <br></br>
            <Typography color="Primary">
                <h1 align="center">Conditionals - Update</h1>
                </Typography>
            <Grid container spacing={2}>
                <Grid item sm={4}>
                    <Card style={{marginLeft:"30px", width:"450px", height:"600px", backgroundColor:"yellowgreen"}}>
                <Typography align="left" gutterBottom>
                   <CardContent>
                    <b>Why are conditionals used </b>
                   </CardContent>
                   <CardContent>
                   Conditionals are used to show different outcomes of different decisions. It has three parts - 
                   </CardContent>
                   <CardContent>
                    1. If Statement
                   </CardContent>
                   <CardContent>
                    2. Elif Statement 
                   </CardContent>
                   <CardContent>
                    3. Else statement
                   </CardContent>
                   <CardContent>
                   The example given in the sandbox helps us determine the range in which the numerical value was entered by the user. 
                   </CardContent>
                   <CardContent>
                   Having an if statement and else statement is the primary 
                   structure of a conditional with just two outcomes <b>but an elif statement is used when we want to categorize something in more than two outcomes. </b>
                   </CardContent>
                </Typography>
                </Card>
                </Grid>
                <br></br>
                <br></br>
                <Grid item sm={4}>
                <Card style={{marginLeft:"20px", width:"450px", height:"600px", backgroundColor:"yellowgreen"}}>
                <Typography align="left" gutterBottom>
                    <CardContent>
                        <b>Sandbox example of conditionals</b>
                    </CardContent>
                <CardContent>
                In the example given in the sandbox below, we are separating the input entered by the user into four categories - 
                </CardContent>
                <CardContent>
                1. Less than 10
                </CardContent>
                <CardContent>
                2. Greater than 10 but less than 15
                </CardContent>
                <CardContent>
                3.  Greater than 15 but less than 20
                </CardContent>
                <CardContent>
                4.  Greater than 20
                </CardContent>
                <CardContent>
                Having these different categories produces different results which can be seen by running the code below. The statement that amounts to true is the one that will be executed, and the other statements will be ignored or skipped.
                </CardContent>
                </Typography>
                </Card>
                </Grid>
                <Card style={{marginTop:"16px", width:"450px", height:"610px", marginLeft:"20px", backgroundColor:"yellowgreen"}}>
                        <CardContent>
                            <b>Formatting/Syntax for Conditionals</b>
                        </CardContent>
                        <CardContent>
                            1. Identation is important! The lines of code that you want to execute if an if or elif statement is true, 
                            should be indented under the declaration of an if statement as shown in the example piece of code. 
                        </CardContent>
                        <CardContent>
                            2. Only the lines of code under the statement that evalutates to true will be executed, the rest of the code will be skipped. 
                        </CardContent>
                        <CardContent>
                            <b>Logical Operators: These are the operators that return either false or true as an output. </b>
                        </CardContent>
                        <CardContent>
                            1. <b>==</b>  : This is an operator to check whether two data points are equal to eachother or not. "print(9==5)" will give us an output of false since 9 and 5 are not equal. However, a "print(5==5)" will give a true result. 
                        </CardContent>
                        <CardContent>
                            2. <b>And</b> : This is an operator which returns true if both the conditions are true. Similar to what AND actually means! For example, in the sandox example, the code within each else if or if statement will only be 
                            executed if the "and" operators return true. 
                        </CardContent>
                        <CardContent>
                            3. <b>Or</b> : Similar to the word "or" this returns true if either of the conditions are true. 
                        </CardContent>
                    </Card>

                 </Grid>
                 <Grid container spacing={2}>
                    <Grid item sm={7} align="center">
                        <br></br>
                        <br></br>
                <iframe style={{marginLeft:"150px", marginBottom:"50px"}}  align="center" title='Learning about input and output in Python' src="https://trinket.io/embed/python/cbfde46f46"  width="800" height="500" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
                </Grid>
                <Grid item sm={5}>
                <Card width="600px" height="600px" raised="true" style={{ width:"400px", height:"400px", marginRight:"50px", marginTop:"100px", marginLeft:"100px", backgroundColor:"yellowgreen"}} >
                <CardContent><b>Try yourself!</b></CardContent>
                <CardContent>
                 Now that you have seen an example, it is time for you to apply this knowledge to our creamery!
                </CardContent>
                <CardContent>
                Print the cost of different types of ice creams according to the ice cream flavor that the user enters.
                Modify the sandbox on the side with your code and see if you can get the correct output!
                </CardContent>
                </Card>
                </Grid>
                </Grid>
        </div>
)
}
export default Conditionals