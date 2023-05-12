import React from 'react';
import { CardContent, Container, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import {Card} from '@mui/material';

function Conditionals(){
    return(
        <div>
            <br></br>
            <br></br>
            <br></br>
            <Container>
                <Typography color="error">
                <h1 align="center">Conditionals</h1>
                </Typography>
                <Typography color="Primary" variant='h6' align="left" fontFamily={"GoldmanBold"}  gutterBottom>
                   Conditionals are used to show different outcomes of different decisions. <b>It has three parts - if statement, elif statement, and else statement.</b>
                   The example given in the sandbox helps us determine the range in which the numerical value was entered by the user. Having an if statement and else statement is the primary 
                   structure of a conditional with just two conditionals <b>but an elif statement is used when we want to categorize something in more than two categories. </b>
                </Typography>
                <Typography color="black" variant='h6' align="left" fontFamily={"GoldmanBold"} gutterBottom>
                <i>In the example given in the sandbox below, we are separating the input entered by the user into four categories - less than 10, greater than 10 but less than 15, greater than 15 but less than 20 and greater than 20; 
                and having these different categories produces different results which can be seen by running the code below. The statement that amounts to true is the one that will be executed, and the other statements will be ignored or skipped.  </i>
                </Typography>
                 </Container>
                 <Grid container spacing={2}>
                    <Grid item sm={8} align="center">
                <iframe align="center" title='Learning about input and output in Python' src="https://trinket.io/python/d9e7cd51ff"  width="800" height="500" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
                </Grid>
                <Grid item sm={4} align="center">
                <Card align="center" width="600px" height="600px" raised="true" style={{backgroundColor: "yellow", width:"400px", height:"400px", marginRight:"60px"}} >
                <CardContent>
                    <Typography color="Primary" variant="h4" align="center" fontFamily={"GoldmanBold"} >
                        <CardContent>Try yourself!</CardContent>
                    </Typography>
                <Typography color="darkred" variant='h6' align="left" fontFamily={"GoldmanBold"} marginRight="30px">
                 Now that you have seen an example, it is time for you to apply this knowledge to our creamery!
                Print the cost of different types of ice creams according to the ice cream flavor that the user enters.
                Modify the sandbox on the side with your code and see if you can get the correct output!
                </Typography>
                </CardContent>
                </Card>
                </Grid>
                </Grid>
        </div>
)
}
export default Conditionals