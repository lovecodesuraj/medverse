import { Grid, Button, IconButton, Paper } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./styles.css";
import UserIcon from "@mui/icons-material/AccountBoxOutlined"
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../actions/auth';

const Navbar = () => {

  const navigate = useNavigate()
  const dispatch=useDispatch();
  const {authData}=useSelector(state=>state.auth);

  const logoutUser=()=>{
     dispatch(logout);
  }

  return (
    <>
      <Grid
        item
        md={12}
        className='home_navbar'
      >
        <div className="home_navbar_wrapper">

          <div className="home_navbar_logo">medverse</div>
          <div className="home_navbar_menu">
            <ul>
              <li><Link style={{ textTransform: "capitalize", textDecoration: "none", fontFamily: "Poppins", color: "black", fontSize: "18px" }} to="/questions">questions</Link></li>
              <li><Link style={{ textTransform: "capitalize", textDecoration: "none", fontFamily: "Poppins", color: "black", fontSize: "18px" }} to="/questions"></Link></li>
              <li><Link style={{ textTransform: "capitalize", textDecoration: "none", fontFamily: "Poppins", color: "black", fontSize: "18px" }} to="/questions">Messages</Link></li>
            </ul>
          </div>
          <div className="home_navbar_account">
            {authData ?
              <>
                {authData.picture ? <>
                  <Paper
                    elevation={6}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundImage: `url("${authData?.picture}")`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    onClick={logout}
                  >
                  </Paper>
                  {/* <p className='home_navbar_userName'>{user?.name}</p> */}
                </>
                  :
                  <>
                    <IconButton><UserIcon /></IconButton>
                    <Button onClick={logoutUser}>Logout</Button>
                  </>
                }
              </>
              :
              <>
                <Button variant='outlined' onClick={e => { e.preventDefault(); navigate("/auth/signup") }}>Signup</Button>
              </>
            }
          </div>

        </div>
      </Grid>
    </>
  )
}

export default Navbar