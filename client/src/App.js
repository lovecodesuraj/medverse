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

function App() {
  const user=JSON.parse(localStorage.getItem('profile'));
  const navigate=useNavigate();
  const classes = useStyles();
  return <>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route exact path="/questions" element={<Home />} />
          <Route exact path="/tags" element={<Home />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/auth" element={!user ? <Auth /> : <Home />} />
          <Route exact path="/questions/ask" element={user?<AddQuestion/>:<Auth />}/>
          <Route exact path="/questions/:id" element={<QuestionDetails />} />
          <Route exact path="/questions/search" element={<Home />} />
          {/* <Route  path="/questions?page=" element={<Home />}/> */}
        </Routes>
        {/* <Home /> */}
      </Container>
  </>
}

export default App;
