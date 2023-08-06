import React from 'react'
import { Typography, Grid, Button, CardContent} from '@mui/material'
import { Card } from '@mui/material'

function Lists(){
    return(
        <div>
            <Typography color="success">
                <h1 align="center" color='success'>Lesson 3: Let's learn about Lists!</h1>
                <Button  align = "center" href="/App" variant="contained" color="inherit" label="Lists" size="extralarge" style={{marginLeft:"1100px"}}>
                    Homepage
                </Button>
                <br></br>
                <br></br>
                <br></br>
            </Typography>

            <Grid container spacing={2}>
                <Grid item sm ={4}>
                <Card style={{marginLeft:"100px", width:"700px", height:"375px", backgroundColor:"white"}} raised="true">
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
                            Lists can become useful when working with <b>related values and data sets</b>. Lists are an easy way to keep data organized and perform the same operations on multiple values at once. These operations can be performed using different <b>list functions</b>. Examples of these functions are given on the next card. To retrieve an item from a list, use the list name followed by square brackets framing the index of the item you want to access. Ex: <b>list_name[0] - retrieves the first element of a list.</b>
                        </CardContent>
                    </Typography>
            </Card>

            <br></br>
            <br></br>

            <iframe align="center" style={{marginLeft:"100px"}} title='Learning about Lists in Python' src= "https://trinket.io/embed/python/b6cfff3ab5?toggleCode=true"  width="700" height="525" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"/>
            <br></br>
            <br></br>
            </Grid>
            <Grid item sm={4}>
            </Grid>
            <Grid item sm={4}>
                <Card style={{backgroundColor:"white", width:"400px", height:"710px", marginRight:"100px"}} raised="true">
                    <CardContent>
                        <Typography>
                            <b>Important Python List Functions:</b>
                        </Typography>
                    </CardContent>
                    <Typography>
                        <CardContent>
                            <b>1. len(list_name)</b> - Returns the number of items in the List.
                        </CardContent>
                        <CardContent>
                            <b>2. append(element)</b> - Used for appending and adding the element given as a parameter to the end of the List.
                        </CardContent>
                        <CardContent>
                            <b>3. remove(element)</b> - Removes the element given as a parameter from the given List. 
                        </CardContent>
                        <CardContent>
                            <b>4. sort()</b> - Sort a List in ascending, descending, or user-defined order.
                        </CardContent>
                        <CardContent>
                            <b>5. count(element)</b> - Returns the number of times the element given as a parameter appears in a List.
                        </CardContent>
                        <CardContent>
                            <b>6. min(list) / max(list)</b> - Calculates the minimum or maximum of all the elements of the given List
                        </CardContent>
                        <CardContent>
                             Note: the items inside the parenthesis are called <b>parameters</b>. Run the code in the sandbox and to see how ice cream flavors can be added to a list that acts as the shopping cart. 
                        </CardContent>
                    </Typography>
                </Card>
                <br></br>
                <br></br>
                <br></br>
                <Card style={{backgroundColor:"white", width:"400px", height:"135px", marginRight:"100px"}} raised="true">
                    <Typography style={{color:"black"}}>
                    <CardContent>
                        <b>Your turn to modify the sandbox!</b> 
                    </CardContent>
                    <CardContent>
                        Now try using the <b>costs list</b> to add up the total cost of the shopping cart.
                    </CardContent>
                    </Typography>
                </Card>
                <br></br>
                <br></br>
                <br></br>
                </Grid>
            </Grid>
        </div>
)
}
export default Lists