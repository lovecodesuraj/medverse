import { Container, Paper } from "@material-ui/core";
import './App.css';
import { Grid } from "@material-ui/core"
import useStyles from './styles';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/home/home';
import Auth from "./components/auth/auth";
import Questions from "./components/questions/questions";
import AddQuestion from "./components/forms/question/question";
import QuestionDetails from "./components/questions/questionDetails/questionDetails";
import Users from "./components/users/Users";
import VerticalNavbar from "./components/verticalNavbar/VerticalNavbar";
import User from "./components/users/user/User"
import Footer from "./components/footer/Footer";
import Tags from "./components/tags/Tags";
import Headlines from "./components/headlines/Headlines";
import DashBoard from "./components/dashboard/DashBoard";
function App() {
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();
  const classes = useStyles();
  return <>
    <Container maxWidth="xl" className={classes.app}>
      <Navbar />
      <Grid className={classes.main}  container  justifyContent="center" columns={{ xs: 1, sm: 1, md: 3,lg:3 }}  >
        <Grid item lg={2} md={2} sm={12} className={classes.verticalNavbar}> <VerticalNavbar /></Grid>
        <Grid item lg={7} md={10} sm={12} className={classes.routes}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route exact path="/questions" element={<Home />} />
            <Route exact path="/tags" element={<Tags />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/users/:_id" element={<User />} />
            <Route exact path="/auth" element={!user ? <Auth /> : <Home />} />
            <Route exact path="/questions/ask" element={user ? <AddQuestion /> : <Auth />} />
            <Route exact path="/questions/:id" element={<QuestionDetails />} />
            <Route exact path="/questions/search" element={<Home />} />
            <Route exact path="/dashboard/:_id" element={user?<DashBoard />:<Auth />} />
          </Routes>
        </Grid>
        <Grid item lg={3} className={classes.rightBar}>
          <Paper elevation={6}><Headlines /></Paper>
        </Grid>
      </Grid>
      {/* <Home /> */}
      <Footer />
    </Container>
  </>
}

export default App;
