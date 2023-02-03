import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import { GoogleLogin, GoogleOAuthProvider ,googleLogout } from '@react-oauth/google';
import { Typography, Paper, Button, Avatar, Grid, Conatiner, Container, TextField } from "@material-ui/core";
import {useNavigate} from "react-router-dom";
import useStyles from "./styles";
import {clientId} from "./data";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Input from "./input"
import {useDispatch} from "react-redux";
import {signup,signin} from "../../actions/auth"
import { addUser } from "../../actions/users";
const user=JSON.parse(localStorage.getItem('profile'));
const initialState={firstName:"",lastName:"",email:"",password:"",picture:user?.result?.picture,confirmPassword:""};
const Auth = () => {
    const [formData,setFormData]=useState(initialState);
    const dispatch=useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignUp] = useState(false);
    const classes = useStyles();
    const navigate=useNavigate();
    // const isSignup = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignup){
             dispatch(signup(formData,navigate));
        }else{
            dispatch(signin(formData,navigate));

        }
    }
    const handleChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
     }
    const googleSuccess = async (res) => {
        // console.log(res); 
        try {
            const result= await jwt_decode(res.credential);
            const token=res.credential;
             dispatch({type:"AUTH",data:{result,token}})
             console.log(result);
             const {name,email,picture,sub}=result;
             dispatch(addUser({name,email,sub,picture}));
             navigate("/")
        } catch (error) {
            
            console.log(error);
        }
    }
    const googleFailure = (err) => {
        console.log(err, "Google Sign In was unsuccessfull. Try again later ")
    }
    const swicthMode = () => {
        setIsSignUp(prev => !prev);
        setShowPassword(false);
    };
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    return (
        <>
            <Container component='main' maxWidth="xs">
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {
                                isSignup && (
                                    <>
                                        <Input name="firstName" label="First Name" value={formData.firstName} handleChange={handleChange} half />
                                        <Input name="lastName" label="Last Name" value={formData.lastName} handleChange={handleChange} half />
                                    </>
                                )
                            }
                            <Input name="email" label="Email Address" value={formData.email} handleChange={handleChange} type="email" />
                            <Input name="password" label="Password" vaule={formData.password} handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                            {isSignup && <Input name="confirmPassword" label="Confirm Password" value={formData.confirmPassword} handleChange={handleChange} type="password" />}
                        </Grid>
                        <Button type="submit" color="primary" variant="contained" fullWidth className={classes.submit}>
                            {isSignup ? 'Sign Up' : 'Sign In'}
                        </Button>
                        <Button   variant="contained" fullWidth className={classes.googleButton}>
                        <GoogleOAuthProvider clientId={clientId}>
                            <GoogleLogin
                                onSuccess={googleSuccess}
                                onError={googleFailure}
                                theme="outlined"
                                // width="360"
                                // type="icon"
                            />
                        </GoogleOAuthProvider>
                        </Button>


                        <Grid container justify="flex-end" >
                            <Grid item >
                                <Button onClick={swicthMode}>
                                    {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </>
    )
}

export default Auth




// {error: 'idpiframe_initialization_failed', details: 'You have created a new client application that use…i/web/guides/gis-migration) for more information.'}