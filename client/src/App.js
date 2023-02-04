import { Container } from "@material-ui/core";
import './App.css';
import useStyles from './styles';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route , useNavigate } from 'react-router-dom';
import Home from './components/home/home';
import Auth from "./components/auth/auth";
import Questions from "./components/questions/questions";
import AddQuestion from "./components/forms/question/question";
import QuestionDetails from "./components/questions/questionDetails/questionDetails";
import Users from "./components/users/Users";
import VerticalNavbar from "./components/verticalNavbar/VerticalNavbar";
import User from "./components/users/user/User"
import Footer from "./components/footer/Footer";
function App() {
  const user=JSON.parse(localStorage.getItem('profile'));
  const navigate=useNavigate();
  const classes = useStyles();
  return <>
      <Container maxWidth="xl" className={classes.app}>
        <Navbar />
        <VerticalNavbar />
        <Container maxWidth="lg" className={classes.main}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route exact path="/questions" element={<Home />} />
          <Route exact path="/tags" element={<Home />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/users/:id" element={<User />} />
          <Route exact path="/auth" element={!user ? <Auth /> : <Home />} />
          <Route exact path="/questions/ask" element={user?<AddQuestion/>:<Auth />}/>
          <Route exact path="/questions/:id" element={<QuestionDetails />} />
          <Route exact path="/questions/search" element={<Home />} />
          {/* <Route  path="/questions?page=" element={<Home />}/> */}
        </Routes>
        </Container>
        {/* <Home /> */}
        {/* <Footer /> */}
      </Container>
  </>
}

export default App;
