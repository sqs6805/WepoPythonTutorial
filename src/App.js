import React from 'react';
import { Grid, Button} from '@mui/material';

function App() {
  return (
  <div>
    <br></br>
    <br></br>
    <main/>
        <h1 style={{textAlign: "center"}}>Let's build our own Penn State Creamery!!</h1>
        <br></br>
        <br></br>
        <h2 style={{textAlign: "center"}}>WEPO 2023 Python Tutorial</h2>
        <br></br>
        <br></br>
        <div>
        <img src="cup1.png" width={250} height={250} alt="" style={{marginLeft:"300px"}}/>
        <img src="creamery.png" width={250} height={250} alt="" style={{marginLeft:"100px"}}/>
        <img src="cup2.png" width={250} height={250} alt="" style={{marginLeft:"100px"}}/>
        </div>
  <br></br>
  <br></br>
<Grid item xs={3}>
      <Button href="/Input" variant="contained" color="inherit" label="Input/Output" size="large" style={{marginLeft:"650px"}}>
        Lesson 1: Input and Output
        </Button>
      </Grid>
      <br></br>
      <br></br>
      <Grid item xs ={3}>
          <Button href="/Conditionals" variant="contained" color="inherit" label="Conditionals" size="large" style={{marginLeft:"650px"}}>
            Lesson 2: Conditionals
            </Button>
      </Grid>
      <br></br>
      <br></br>
      <Grid item xs ={3}>
          <Button href="/Lists" variant="contained" color="inherit" label="Lists" size="large" style={{marginLeft:"650px"}}>
          Lesson 3: Lists
            </Button>
      </Grid>
      <br></br>
      <br></br>
      <Grid item xs ={3}>
          <Button href="/Loops" variant="contained" color="inherit" label="Loops" size="large" style={{marginLeft:"650px"}}>
            Lesson 4: Loops
          </Button>
          </Grid>
          <br></br>
      <br></br>
      <Grid item xs ={3}>
      <Button href="/Functions"  variant="contained" color="inherit" label="Functions" size="large" style={{marginLeft:"650px"}}>
        Lesson 5: Functions
        </Button>
      </Grid>
      <br></br>
      <br></br>
      <Grid item xs ={3}>
      <Button href="/Debugging" variant="contained" color="inherit" label="Debugging" size="large" style={{marginLeft:"650px"}}>
        Lesson 6: Debugging and practice!
        </Button>
      </Grid>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
