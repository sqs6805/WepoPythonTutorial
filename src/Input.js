import React from 'react'
import { Typography, Grid, CardContent} from '@mui/material'
import { Card } from '@mui/material'

function Input(){
    return(
        <div>
            <Typography color="success">
                <h1 align="center" color='success'>Variables, Data Types, Comments, Input and Output</h1>
             </Typography>
            <Grid container spacing={2}>
                <Grid item sm ={4}>
            <iframe align="center" style={{marginLeft:"40px"}} title='Learning about input and output in Python' src="https://trinket.io/embed/python3/860e806044"  width="600" height="400" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
            <br></br>
            <br></br>
            <Card style={{marginLeft:"100px", width:"400px", height:"400px"}} raised="true">
                <CardContent>
                    Try yourself!
                </CardContent>
                <CardContent>
                    Try creating an input yourself now! Ask the user to enter their favorite ice cream flavor. 
                </CardContent>
            </Card>
            </Grid>
            <Grid item sm={4}>
                <Card style={{width: "400px", height:"150px", marginLeft:"120px"}} raised="true">
                    <CardContent>
                        This card explains input and output
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4}>
                <Card style={{backgroundColor:"yellowgreen", width:"450px", height:"550px", marginRight:"60px"}} raised="true">
                    <CardContent>
                        <Typography>
                            <b>Different types of data types:</b>
                        </Typography>
                    </CardContent>
                    <Typography>
                        <CardContent>
                            1. Integer - Non decimal numerical values are categorized as "int". For example, 1, 2, 3.. 
                        </CardContent>
                        <CardContent>
                            2. Float - These are the numeric decimal values. For example, 2.3, 7.8, 4.0
                        </CardContent>
                        <CardContent>
                            3. String - Anything having " " around it can be categorized as a string value. For example, "name", "apple", "4"
                        </CardContent>
                        <CardContent>
                            4. Boolean - This can have only two values - true of false. Used as a check for different properties. For example, if an object has a property that is present, the value of the property will be <b>true</b>, otherwise it will be <b>false</b>
                        </CardContent>
                        <CardContent>
                            Go to the sandbox and try printing "type(5)", type("5"). Type is a function that helps us determine the 
                            type of a given variable. 
                        </CardContent>
                    </Typography>
                </Card>
                <br></br>
                <br></br>
                <br></br>
                <Card style={{backgroundColor:"yellowgreen", width:"450px", height:"200px", marginRight:"60px"}} raised="true">
                    <Typography style={{color:"black"}}>
                    <CardContent>
                        <b>Comments</b>
                    </CardContent>
                    <CardContent>
                        This is a way to write a desciption of your code that won't affect the execution of the program. 
                    </CardContent>
                    </Typography>
                </Card>
                </Grid>
            </Grid>
        </div>
)
}
export default Input