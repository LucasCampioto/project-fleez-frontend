import React from 'react';
import styled from 'styled-components';
import '../../style/scss/app.scss'
import './menuToggle.css'
import'./optionsMenu.css'
import CardGoal from '../../components/CardGoals/index'
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { connect } from "react-redux";
import { getGoals, createNewGoal } from '../../Actions/goal'
import TextField from "@material-ui/core/TextField";
import Avatar from '@material-ui/core/Avatar';

const Container = styled.div`
    display:grid;
    grid-template-columns: 1fr 80%;
    background: linear-gradient(45deg, #fc5035, #fa644d, #f39485, #fcaea2);
	background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    min-height:100vh;
    @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`

const ContainerGoals = styled.div`
  margin-right:300px;
  @media only screen and (max-width: 682px){
        margin-right:50px;
        text-align:center;
  }
`

const TitleGoals = styled.p`
    font-family:CaviarDreams;
    font-weight: 700;
    font-size:30px;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-top:70px;
    padding-bottom:20px;
    width:100%;
    @media only screen and (max-width: 682px){
        font-size:1.3em;
        margin-bottom:-30px;
        padding-top:65px;
  }
`
const ContainerTitle = styled.div`
    text-align:center;
    margin:auto;
    @media only screen and (max-width: 682px){
        width:100%;
  }
`
const ContainerInput = styled.div`
   display:flex;
   justify-content:center;
   margin-top:60px;
   margin-bottom:40px;
   
`

const ContainerMenuToggle = styled.div`

`

const ContainerNameAvatar = styled.div`
    display:flex;
    margin-left:30px;
    align-items:center;
`
const NameAvatar = styled.h1`
    font-size: 1.3em;
    margin-left:10px;
    margin-top:70px;
`

const ImageAvatar = styled(Avatar)`
    margin-left:10vw;
    margin-top:60px;
`
const ContainerMenusToggle = styled.div`
    text-align:center;
    margin-top:80px;
`

const MenuAccount = styled.div`
    margin-left:10vw;
    color:black;
    font-size:1.4em;
    cursor:pointer;
`

const MenuConfiguration = styled.h1`
    margin-left:10vw;
    color:black;
    font-size:1.4em;
    margin-top:10px;
    cursor:pointer;
`

const MenuLogout = styled.h1`
    margin-left:10vw;
    color:black;
    font-size:1.4em;
    margin-top:10px;
    cursor:pointer;
`

  class Goals extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            goal:""
        }
    }
    componentDidMount(){
        if (localStorage.getItem("token") === null){
            this.props.goToHomePage()
            window.alert("Área restrita. Faça seu login")
           }
        this.props.getGoals()
    }

    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

      createGoal = async(e) =>{
        e.preventDefault()
        this.props.createNewGoal(this.state.goal)
        this.setState({
            goal: ""
        })
      }


    render(){
            
        return(
            <Container>
                <ContainerMenuToggle>
                    <div class="menu-container">
                        <input type="checkbox" id="openmenu" class="hamburger-checkbox" />
                        <div class="hamburger-icon">
                            <label for="openmenu" id="hamburger-label">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            </label>    
                        </div>

                        <div class="menu-pane">  
                            <nav class="nav-toggle">
                           
                                <ContainerNameAvatar>
                                    <ImageAvatar>L</ImageAvatar>
                                    <NameAvatar>Lucas Campioto</NameAvatar>
                                </ContainerNameAvatar>
                                
                                <ContainerMenusToggle>
                                    <MenuAccount>
                                        <section class="sectionButton">
                                            <button class="button" data-hover="🧍 / 🧍‍♀️"><div>Conta</div></button>
                                        </section>
                                    </MenuAccount> 
                                    <MenuConfiguration>
                                        <section class="sectionButton">
                                            <button class="button" data-hover="⚙️"><div>Configurações</div></button>
                                        </section>
                                    </MenuConfiguration>
                                    <MenuLogout>
                                        <section class="sectionButton">
                                            <button class="button" data-hover="⬅️"><div>Sair</div></button>
                                        </section>
                                    </MenuLogout>   
                                </ContainerMenusToggle>
                                   
                            </nav>
                        </div>
                            <div class="body-text">
                            </div>
                    </div>
                </ContainerMenuToggle>
                
                <ContainerGoals>
                    <ContainerTitle>
                        <TitleGoals>Cadastre suas metas </TitleGoals>
                    </ContainerTitle>
                    
                    <ContainerInput >
                        <div class="container">
                            <input class="c-checkbox" type="checkbox" id="checkbox"/>
                            <div class="c-formContainer">
                            <form class="c-form" action="" onChange={this.handleChange} >
                                <input  value={this.state.goal} name="goal" class="c-form__input" placeholder="Qual sua meta ?" type="text" required/>
                                <label onClick={this.createGoal} class="c-form__buttonLabel" for="checkbox">
                                <button class="c-form__button" type="button" >enviar</button>
                                </label>
                                <label class="c-form__toggle" for="checkbox" data-title="Digite sua nova meta"></label>
                            </form>
                            </div>
                        </div>
                    </ContainerInput>
                    {this.props.getToGoals.map((goal) => (
                        <CardGoal 
                            goal={goal}
                        />
                    ))}
                </ContainerGoals>
            </Container>
        )
    }
}



const mapStateToProps = (state) => ({
    getToGoals: state.goals.allGoals
})

const mapDispatchToProps = (dispatch) => {
    return {
        getGoals: () => dispatch(getGoals()), 
        createNewGoal: (goal) => dispatch(createNewGoal(goal)),
        goToHomePage: ()=> dispatch(push(routes.homePage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Goals);