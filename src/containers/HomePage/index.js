import React from 'react';
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { connect } from "react-redux";
import '../../style/index.css';
import styled from 'styled-components';
import Logo from '../../img/logo.png'
import Illustration from '../../img/ilustração.png'
import Details from '../../img/details.png'
import Lamp from '../../img/lampadas.png'
import Signup from '../Signup/index'
import Login from '../LoginPage/index'
import './button.css'

const Container = styled.div`
    display:grid;
    grid-template-columns: 1fr 60%;
    @media only screen and (max-width: 682px){
        display:flex;
        flex-direction:column;
        min-height:100vh;
        background-color:white;
        margin:auto;
  }
`

const ContainerLogin = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    font-family:CaviarDreams;
    background-color:white;
    @media only screen and (max-width: 682px){
        display:flex;
        flex-direction:column;
  }
`

const LoginWrapper = styled.div`
   text-align:center;
`

const ImageLogo = styled.img`
    width:250px;
    height:250px;
    @media only screen and (max-width: 682px){
        margin-top:-10px;
        margin-bottom:50px;
        width:300px;
        height:300px;
  }
`

const ContainerLogo = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:-30px;
    margin-top:-45px; 
`

const ContainerIllustration = styled.div`
    display:flex;
    min-width:100%;
    justify-content:flex-end;
    background-color:#fc5035;
    min-height: 100vh;
    @media only screen and (max-width: 682px){
        background-color:white;
        display:none;
        width:100%; 
  }
`

const ImageIllustration = styled.img`
    position: absolute;
    margin-top:55px;
    right:100px;
    width:600px;
    height:550px;
    @media only screen and (max-width: 682px){
        display:none;
        position:none;
        margin-top:0px;
        right:0px;
        width:0px;
        height:0px;
  }
`

const ImageLamp = styled.img`
    position: absolute;
    top:250px;
    right:769px;
    width:100px;
    height:100px;
    @media only screen and (max-width: 682px){
        display:none;
        position: none;
        top:0px;
        right:0px;
        width:0px;
        height:0px;
  }    
`

const ImageDetails = styled.img`
    position: absolute;
    top:0px;
    right:644px;
    width:350px;
    height:100%;
    border-radius:20px;
    @media only screen and (max-width: 682px){
        display:none;
        position: none;
        top:0px;
        right:0px;
        width:0px;
        height:0px;
  }
`

 class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            signupShow: false,
            nameButton: false
        }
    }

signupShow = () =>{ 
    this.setState({signupShow: !this.state.signupShow}) 
}

textButton = () =>{
    this.setState({nameButton: !this.state.nameButton})
}

handleNameAndForm = () =>{
    this.signupShow()
    this.textButton()
}

componentDidMount(){
    this.textButton()
}

    render(){
        return(
            <Container>   
                <ContainerLogin>
                    <ContainerLogo>
                        <ImageLogo src={Logo} />
                    </ContainerLogo>
                    <LoginWrapper>
                        <nav class="button-login">
                            <ul class="button-ul">
                                <li onClick={this.handleNameAndForm}>
                                    {this.state.nameButton ? "Sign Up" : "Login"}
                                    <span></span><span></span><span></span><span></span>
                                 </li>
                            </ul>
                        </nav>
                        {this.state.signupShow ? <Signup/> : <Login/>}
                    </LoginWrapper>
                </ContainerLogin>
                <ContainerIllustration>
                    <ImageIllustration src={Illustration} />
                    <ImageLamp src={Lamp} />
                    <ImageDetails src={Details}/>
                </ContainerIllustration>
            </Container>
        ) 
    }
}

export default HomePage

