import React from 'react';
import styled from 'styled-components';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import { deleteGoal, editGoal} from "../../Actions/goal";
import { connect } from "react-redux";
import './cardGoals.css';


const Container = styled.div `

`

const CardGoal = styled.div`
   width:30vw;
   display:grid;
   font-family:CaviarDreams;
   grid-template-columns: 75% 1fr;
   align-items:center;
   height:50px;
   background-color:white;
   border-radius:5px;
   margin:auto;
   margin-top: 10px;
   margin-bottom: 15px;
   border:none;
   color:black;
   font-weight:bold;
   border-radius:15px;
   @media only screen and (max-width:682px){
        grid-template-columns: 70% 1fr;   
        width:90vw;
        right:200px;
        margin-left:-50px;
  }
  
`
const TextGoal = styled.p`
    font-size:20px;
    cursor:pointer;
    @media only screen and (max-width: 682px){
        font-size:1em;
  }
`;

const ContainerIcon = styled.div`
 @media only screen and (max-width: 682px){
    width:100%;
    margin-left:10px;
 }
`

const IconCheck = styled.span`
    cursor:pointer;
    color:green;
`

const IconEdit = styled.span`
    cursor:pointer;
    color:blue;
    @media only screen and (max-width: 682px){
        margin-left:-5px;
  }
`

const IconDelete = styled.span`
    margin-left:10px;
    margin-right:10px;
    color:red;
    cursor:pointer;
    @media only screen and (max-width: 682px){
        margin-left:5px;
  }
`
const InputEditGoal = styled.input`
    border:none;
    height: 35px;
    font-size:20px;
    font-family:CaviarDreams;
    font-weight:bold;
    outline: none;
    border-radius:5px;
    @media only screen and (max-width: 682px){
        margin-left:3px;
        font-size:1em;
        ::-webkit-input-placeholder{ 
            font-size:0.8em;
        }
  }

`

class CardGoals extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            editGoal: false,
            inputEditGoal:""
        }
    }

    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleDeleteGoal = async(idGoal) => {
        try{
            idGoal = this.props.goal.id
            this.props.deleteGoal(idGoal)
        }catch(e){
            console.log(e.message)
        }
    }

    editInputShow = () =>{
        this.setState({editGoal: !this.state.editGoal})
    }

    editGoal = (idGoal) =>{
        try{
            idGoal = this.props.goal.id
            const newGoal = this.state.inputEditGoal
            this.props.editGoal(idGoal,newGoal) 
            this.setState({inputEditGoal: ""})
            this.setState({editGoal: !this.state.editGoal})               
        }catch(e){
            console.log(e.message)
        }
    }

    sendPressEnter = (e) =>{
        if (e.keyCode === 13){
			this.editGoal()		
		}
    }
    
    render(){
        return(
            <Container>
                <CardGoal draggable="true">
                    <input class="input-check" type="checkbox" id={this.props.goal.id} />
                    <div class="container-text">
                        <TextGoal>  {this.state.editGoal ? 
                            <InputEditGoal type="text"
                                           onChange={this.handleChange}
                                           onKeyDown={this.sendPressEnter}
                                           value={this.state.inputEditGoal}
                                           name="inputEditGoal"
                                           placeholder="Edite sua meta"/> : this.props.goal.goal}</TextGoal>                    
                    </div>  
                    <ContainerIcon>
                        <label class="label-iconcheck" for={this.props.goal.id}><CheckIcon /></label>
                        <IconEdit onClick={this.editInputShow}><EditIcon/></IconEdit>
                        <IconDelete onClick={this.handleDeleteGoal}><DeleteIcon /></IconDelete>
                    </ContainerIcon>  
                </CardGoal>
            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteGoal: (idGoal) => dispatch(deleteGoal(idGoal)),
        editGoal: (idGoal, newGoal) => dispatch(editGoal(idGoal, newGoal)),  
    }
}

export default connect(null, mapDispatchToProps)(CardGoals);