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

            <Card style={{backgroundColor:"yellowgreen", width:"400px", height:"600px", marginRight:"80px", marginLeft:"50px", marginTop:"30px"}} raised="true">
            <CardContent>
                <b>Variables</b>
            </CardContent>
            <CardContent>
                Variables is a way to store data. You can assign something to a variable when you want to use it in your code somewhere. 
            </CardContent>
            <CardContent>
                For example, if you see the example given below in the sandbox, "favorite_car_brand" is actually a variable which is storing the data point that the user is entering.
            </CardContent>
            <CardContent>
                Variables is a simple concept but there are certain rules that you need to keep in mind while declaring these: 
            </CardContent>
            <CardContent>
            1. A variable name must start with a letter or the underscore character
            </CardContent>
            <CardContent>
            2. A variable name cannot start with a number
            </CardContent>
            <CardContent>
            3. A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )
            </CardContent>
            <CardContent>
            4. Variable names are case-sensitive (age, Age and AGE are three different variables)
            </CardContent>
            </Card>
            <br></br>
            <br></br>
            <iframe align="center" style={{marginLeft:"300px", marginBottom:"15px"}} title='Learning about input and output in Python' src="https://trinket.io/embed/python/024ee9fc0a"  width="600" height="400" sandbox="allow-forms allow-modals allow-presentation allow-same-origin allow-scripts"/>
            
            </Grid>
            <Grid item sm={4}>
            <Card style={{backgroundColor:"yellowgreen", width:"480px", height:"600px", marginRight:"60px", marginTop:"30px"}} raised="true">
                    <CardContent>
                        <Typography>
                            <b>Data Types</b>
                        </Typography>
                    </CardContent>
                    <CardContent>
                        The data stored in variables can be of different types, for example, if it is number it is either an int or float, if it is something in quotes then it is a string. More data types are given below - 
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
                            4. Boolean - This can have only two values - true of false. For example, if an object has a property that is present, the value of the property will be <b>true</b>, otherwise it will be <b>false</b>
                        </CardContent>
                        <CardContent>
                            In the sandbox below try doing "print(type("5"))". Type is a function that helps us determine the 
                            type of variable. 
                        </CardContent>
                    </Typography>
                </Card>
                <Card style={{marginLeft:"400px", width:"400px", height:"200px", marginTop:"100px",  backgroundColor:"yellowgreen"}} raised="true">
                <CardContent>
                    <b>Try yourself!</b>
                </CardContent>
                <CardContent>
                    Try creating an input yourself now! Ask the user to enter their favorite ice cream flavor. 
                </CardContent>
                <CardContent>
                    Do this my modifying the sandbox and writing your own code! 
                </CardContent>
            </Card>
            </Grid>
            <Grid item sm={4}>
            <Card style={{width: "400px", height:"600px", marginLeft:"5px", marginTop:"30px", backgroundColor:"yellowgreen"}} raised="true">
                    <CardContent>
                        <b>Input/Output</b>
                    </CardContent>
                    <CardContent>
                        <b>A way to get an input from the user in Python is to use the input() function.</b> The input function is supposed to 
                        include a string within the brackets of the function (as shown in the example in the sandbox). This string will be 
                        displayed to the user when the code is run and tells the user what input the computer is looking for. 
                    </CardContent>
                    <CardContent>
                        As you can see in the example, we assign the input function to a variable 
                    </CardContent>
                    <CardContent>
                        <b>The way to get an output from the code is using print statements. </b> The print function takes in a variable that 
                        is supposed to be printed and shown to the user, which in other words means giving an output. 
                    </CardContent>
                    <CardContent>
                        <b>Comments</b>
                    </CardContent>
                    <CardContent>
                        This is a way to write a desciption of your code that won't affect the execution of the program.  A line is considered as a comment in Python if it starts with a '#' symbol. 
                    </CardContent>
                </Card>

                
                <br></br>
                <br></br>
                <br></br>
                </Grid>
            </Grid>
        </div>
)
}
export default Input