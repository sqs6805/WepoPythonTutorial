import React from 'react'
import { Typography, Grid, CardContent} from '@mui/material'
import { Card } from '@mui/material'

function Lists(){
    return(
        <div>
            <Typography color="success">
                <h1 align="center" color='success'>Lesson 3: Let's learn about Lists!</h1>
             </Typography>
            <Grid container spacing={2}>
                <Grid item sm ={4}>
                <Card style={{marginLeft:"100px", width:"700px", height:"325px", backgroundColor:"yellowgreen"}} raised="true">
                <CardContent>
                    <Typography>
                        <b>What are Lists and why are they used?</b>
                    </Typography>
                </CardContent>
                    <Typography>
                        <CardContent>
                        A list is a <b>mutable</b> (can be changed) data structure in Python. A list consists of an ordered <b>sequence of elements</b>, each of these elements inside the list is called an <b>item</b>. All python lists are framed by an outerset of <b>square brackets [ ]</b>. Any data types can be added to a single list.
                        </CardContent>
                        <CardContent>
                            Lists can become useful when working with <b>related values and data sets</b>. Lists are an easy way to keep data organized and perform the same operations on multiple values at once. These operations can be performed using different <b>list functions</b>. Examples of these functions are given on the next card.  
                        </CardContent>
                    </Typography>
            </Card>

            <br></br>
            <br></br>

            <iframe align="center" style={{marginLeft:"100px"}} title='Learning about Lists in Python' src= "https://trinket.io/embed/python/b6cfff3ab5?toggleCode=true"  width="700" height="525" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>

            </Grid>
            <Grid item sm={4}>
            </Grid>
            <Grid item sm={4}>
                <Card style={{backgroundColor:"yellowgreen", width:"400px", height:"700px", marginRight:"100px"}} raised="true">
                    <CardContent>
                        <Typography>
                            <b>Important Python List Functions</b>
                        </Typography>
                    </CardContent>
                    <Typography>
                        <CardContent>
                            <b>1. len()</b> - Returns the number of items in the List.
                        </CardContent>
                        <CardContent>
                            <b>2. append()</b> - Used for appending and adding elements to the end of the List.
                        </CardContent>
                        <CardContent>
                            <b>3. remove()</b> - Removes a given object from the List. 
                        </CardContent>
                        <CardContent>
                            <b>4. sort()</b> - Sort a List in ascending, descending, or user-defined order.
                        </CardContent>
                        <CardContent>
                            <b>5. count()</b> - Returns the number of times an object appears in a List.
                        </CardContent>
                        <CardContent>
                            <b>6. min() / max()</b> - Calculates the minimum or maximum of all the elements of the List
                        </CardContent>
                        <CardContent>
                            <b>7. sort()</b> - Sort a List in ascending, descending, or user-defined order.
                        </CardContent>
                        <CardContent>
                             Run the code in the sandbox and to see how ice cream flavors can be added to a list that acts as the shopping cart. 
                        </CardContent>
                    </Typography>
                </Card>
                <br></br>
                <br></br>
                <br></br>
                <Card style={{backgroundColor:"yellowgreen", width:"400px", height:"100px", marginRight:"100px"}} raised="true">
                    <Typography style={{color:"black"}}>
                    <CardContent>
                        <b>Your turn to modify the sandbox!</b> - Now try using the <b>costs list</b> to add up the total cost of the shopping cart.
                    </CardContent>
                    </Typography>
                </Card>
                </Grid>
            </Grid>
        </div>
)
}
export default Lists