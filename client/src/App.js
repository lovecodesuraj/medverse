import logo from './logo.svg';
import './App.css';
import {Container,AppBar,Typography,Grow,Grid} from "@material-ui/core";
import AddQuestion from './components/forms/question/question';
import Questions from './components/questions/questions';

function App() {
  return<>
     <Container maxWidth="lg">
      <AppBar position='static' color='inherit'>
         <Typography variant='h2' align='center'>Medverse</Typography>
      </AppBar>
      <Grow in>
        <Container >
          <Grid container justify="space-between" alignItems='stretch' spacing={3} >
            <Grid item xs={12} sm={7}>
               <Questions />
            </Grid>
            <Grid item xs={12} sm={4}>
              <AddQuestion />
            </Grid>
          </Grid>
        </Container>
      </Grow>
     </Container>
  </>
}

export default App;
