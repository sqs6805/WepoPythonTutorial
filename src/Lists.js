import React from 'react'
import { Typography, Grid, CardContent} from '@mui/material'
import { Card } from '@mui/material'

function Lists(){
    return(
        <div>
            <Typography color="success">
                <h1 align="center" color='success'>Lesson 3: Lets learn about Lists</h1>
                <h1 align="center" color='success'>Lesson 3: Let's learn about Lists!</h1>
             </Typography>
            <Grid container spacing={2}>
                <Grid item sm ={4}>
                <Card style={{marginLeft:"100px", width:"700px", height:"350px"}} raised="true">
                <CardContent>
                    <Typography>
                        <b>What are Lists and why are they used?</b>
                    </Typography>
                </CardContent>
                    <Typography>
                        <CardContent>
                            A list is a mutable (can be changed) data structure in Python. A list consists of an ordered sequence of elements, each of these elements inside the list is called an item. All python lists are framed by an outerset of square brackets [ ]. Any data types can be added to a single list.
                        </CardContent>
                        <CardContent>
                            Lists can become useful when working with related values and data sets. Lists are an easy way to keep data organized and perform the same operations on multiple values at once. These operations can be performed using different list functions. Examples of these functions are given on the next card.  
                        </CardContent>
                    </Typography>
            </Card>

            <br></br>
            <br></br>

            <iframe align="center" style={{marginLeft:"100px"}} title='Learning about Lists in Python' src= "https://trinket.io/library/trinkets/5e353c102a"  width="700" height="450" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>

            </Grid>
            <Grid item sm={4}>
            </Grid>
            <Grid item sm={4}>
                <Card style={{backgroundColor:"yellowgreen", width:"500px", height:"675px", marginRight:"100px"}} raised="true">
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
                        <b>Try it Yourself!</b>
                    </CardContent>
                    <CardContent>
                        Now try creating your own list!  
                    </CardContent>
                    </Typography>
                </Card>
                </Grid>
            </Grid>
        </div>
)
}
export default Lists