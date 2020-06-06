import React from 'react';
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { connect } from "react-redux";
import '../../style/index.css';
import styled from 'styled-components';
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {loginUser} from '../../Actions/users'

const ContainerLogin = styled.div`
    font-family:CaviarDreams;
    background-color:white;
`
const LoginWrapper = styled.div`
   margin-bottom:30px;
   text-align:center;
`

const IconsInputs = styled(InputAdornment)`
    color:#fc5035;
`

const TextFieldLogin = styled(TextField)`
    background-color:transparent;
    width:25vw;
    @media only screen and (max-width: 682px){
        width:80vw;
    }
`
const ButtonContainer = styled.div`
    text-align:center;
`
const ButtonLogin = styled.button`
    width:15vw;
    border-radius:20px;
    background-color:#fc5035;
    border:none;
    color:white;
    font-weight:bold;
    height:35px;
    cursor:pointer;
     box-shadow: 0px 6px 15px #ff8b7a;
     border-radius:15px; 
     outline: none;
     @media only screen and (max-width: 682px){
        width:60vw;
    } 
`

class Login extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:"",
            password:""
        }
    }


    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleLoginUser = async(e) =>{
        e.preventDefault()
        this.props.loginUser(this.state.email,this.state.password)
    }

    render(){
        return(
            <ContainerLogin>
                 <LoginWrapper>
                        <TextFieldLogin 
                            required
                            onChange={this.handleChange}
                            color="primary"
                            name="email"
                            type="email"
                            placeholder="E-mail"                          
                            value={this.state.email}
                            variant="standard"
                            InputProps={{
                                startAdornment: (
                                <IconsInputs position="start">
                                    <MailOutlineIcon />
                                </IconsInputs>
                                ),
                            }}
                        />
                    </LoginWrapper>
                    <LoginWrapper>
                       <TextFieldLogin 
                            required
                            onChange={this.handleChange}
                            color="primary-light"
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            variant="standard"
                            InputProps={{
                                startAdornment: (
                                <IconsInputs position="start">
                                    <LockIcon />
                                </IconsInputs>
                                ),
                            }}
                        />
                   </LoginWrapper>
                   < ButtonContainer>
                        <ButtonLogin onClick={this.handleLoginUser}>
                           LOGIN
                        </ButtonLogin >  
                    </ ButtonContainer>
            </ContainerLogin>
        )
    }
}

const mapDispatchToProps = dispatch => ({    
    loginUser: (email,password) => dispatch(loginUser(email,password))  
});

export default connect(null, mapDispatchToProps)(Login);
