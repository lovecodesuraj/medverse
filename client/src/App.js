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

function App() {
  const user=JSON.parse(localStorage.getItem('profile'));
  const navigate=useNavigate();
  const classes = useStyles();
  return <>
      <Container maxWidth="xlg">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route exact path="/auth" element={<Auth />} />
          <Route exact path="/questions/ask" element={user?<AddQuestion/>:<Auth />}/>
          <Route exact path="/questions/:id" element={<QuestionDetails />} />
          <Route exact path="/questions/search"/>
        </Routes>
        {/* <Home /> */}
      </Container>
  </>
}

export default App;
