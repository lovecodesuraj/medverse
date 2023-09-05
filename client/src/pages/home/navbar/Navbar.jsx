import { Grid, Button, IconButton, Paper } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./styles.css";
import UserIcon from "@mui/icons-material/AccountBoxOutlined"
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../actions/auth';
import { getMe } from '../../../actions/users';

const Navbar = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const authData = JSON.parse(localStorage.getItem('profile'));
  const _id  = authData?authData._id:null;
  const openUserProfille = () => { dispatch(getMe({ _id: authData._id, navigate })); }
  const logoutUser = () => { dispatch(logout(navigate)); }

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
              <li><Link
                style={{ textTransform: "capitalize", textDecoration: "none", fontFamily: "Poppins", color: "black", fontSize: "18px" }}
                to="/questions"
              >questions</Link></li>
              <li><Link
                style={{ textTransform: "capitalize", textDecoration: "none", fontFamily: "Poppins", color: "black", fontSize: "18px" }}
                to={`meet/${_id}`}
              >Meet</Link></li>
              <li><Link
                style={{ textTransform: "capitalize", textDecoration: "none", fontFamily: "Poppins", color: "black", fontSize: "18px" }}
                to={`/discussions/${_id}`}
              >Discussions</Link></li>
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
                    onClick={openUserProfille}
                  >
                  </Paper>
                  <Button onClick={logoutUser}>Logout</Button>
                </>
                  :
                  <>
                    <IconButton ><UserIcon /></IconButton>
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