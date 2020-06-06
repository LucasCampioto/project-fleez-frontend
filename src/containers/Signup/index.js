import React from 'react';
import '../../style/index.css';
import { connect } from "react-redux";
import styled from 'styled-components';
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { newSignup  } from '../../Actions/users'


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

const ButtonSignup = styled.button`
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

class Signup extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name:"",
            email:"",
            password:"",
            photo:""
        }
    }

    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    sendSignup = async(e) =>{
        e.preventDefault()
        this.props.newSignup(this.state.name, 
                             this.state.email, 
                             this.state.password, 
                             this.state.photo)
        window.alert("Cadastro feito com sucesso !!!")
        this.setState({
            name: "",
            email: "",
            password: "",
            photo: ""
        })
    }

    render(){
        return(
            <ContainerLogin>
                 <LoginWrapper>
                        <TextFieldLogin 
                            onChange={this.handleChange}
                            color="primary"
                            name="name"
                            type="text"
                            placeholder="Name"
                            required
                            value={this.state.name}
                            variant="standard"
                            InputProps={{
                                startAdornment: (
                                <IconsInputs position="start">
                                    <AccountCircle />
                                </IconsInputs>
                                ),
                            }}
                        />
                    </LoginWrapper>
                 <LoginWrapper>
                        <TextFieldLogin 
                            onChange={this.handleChange}
                            color="primary"
                            name="email"
                            type="email"
                            placeholder="E-mail"
                            required
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
                            onChange={this.handleChange}
                            color="primary-light"
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
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
                   <LoginWrapper>
                       <TextFieldLogin 
                            onChange={this.handleChange}
                            color="primary-light"
                            name="photo"
                            type="text"
                            placeholder="Photo"
                            required
                            value={this.state.photo}
                            variant="standard"
                            InputProps={{
                                startAdornment: (
                                <IconsInputs position="start">
                                    <PhotoCameraIcon />
                                </IconsInputs>
                                ),
                            }}
                        />
                   </LoginWrapper>
                   < ButtonContainer>
                        <ButtonSignup onClick={this.sendSignup} variant="contained" color="primary">
                            SIGN UP
                        </ButtonSignup >
                    </ ButtonContainer>
            </ContainerLogin>
        )
    }
}

const mapDispatchToProps = dispatch => ({    
    newSignup: (name,email,password,photo) => dispatch(newSignup(name,email,password,photo))
     
});

export default connect(null, mapDispatchToProps)(Signup);