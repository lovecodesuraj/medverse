import { Container } from "@material-ui/core";
import './App.css';
import useStyles from './styles';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Auth from "./components/auth/auth";

function App() {
  const classes = useStyles();
  return <>
    <BrowserRouter>
      <Container maxWidth="xlg">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route exact path="/auth" element={<Auth />} />
        </Routes>
        {/* <Home /> */}
      </Container>
    </BrowserRouter>
  </>
}

export default App;
