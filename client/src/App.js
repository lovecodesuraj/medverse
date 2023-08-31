import { Container, Paper } from "@mui/material";
import './App.css';
// import { Grid } from "@mat"
import useStyles from './styles';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/home/home';
// import Auth from "./components/auth/auth";
import Questions from "./components/questions/questions";
import AddQuestion from "./components/forms/question/question";
import QuestionDetails from "./components/questions/questionDetails/questionDetails";
import Users from "./components/users/Users";
import VerticalNavbar from "./components/verticalNavbar/VerticalNavbar";
import User from "./components/users/user/User"
import Footer from "./components/footer/Footer";
import Tags from "./components/tags/Tags";
import Headlines from "./components/headlines/Headlines";
// import DashBoard from "./components/dashboard/DashBoard";
// import Dashboard from "./components/doctor/dashboard/Dashboard";
import Dashboard from "./pages/user/Dashboard";
import Auth from "./pages/auth/Auth";
// import Auth from "./components/auth/auth";
import Signup from "./pages/auth/signup/Signup";
import Signin from "./pages/auth/signin/Signin";
function App() {
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();
  const classes = useStyles();
  return <>
    {/* <Navbar /> */}
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/auth/signup" exact element={<Signup />} />
      <Route path="/auth/signin" exact element={<Signin />} />
      <Route exact path="/tags" element={<Tags />} />
      <Route exact path="/questions" element={<Questions />} />
      <Route exact path="/users" element={<Users />} />
      <Route exact path="/users/:_id" element={<User />} />
      <Route exact path="/auth/*" element={!user ? <Auth /> : <Home />} />
      <Route exact path="/questions/ask/*" element={user ? <AddQuestion /> : <Auth />} />
      <Route exact path="/questions/:id" element={<QuestionDetails />} />
      <Route exact path="/questions/search" element={<Home />} />
      <Route exact path="/dashboard/:_id" element={user ? <Dashboard /> : <Auth />} />
      <Route exact path="/doctor" element={user ? <Dashboard /> : <Auth />} />
    </Routes >
     {/* <Footer /> */}
  </>
}

export default App;
