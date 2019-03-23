import React from 'react';
import Card from './card'
import uuid from 'uuid';
import CardDisplay from "./cardDisplay";
import {Row,Col} from 'react-bootstrap'


class ListItem extends React.Component{
    state={
        cardId:uuid(),
        cardArray:[],
        card:''
    }
    handleCardSubmit =(e)=>{
        e.preventDefault();
        let newCard ={
            cardId:this.state.cardId,
            title:this.state.card
        };
        console.log(newCard)
        const cardUpdate =[...this.state.cardArray,newCard];
        this.setState({
           cardArray:cardUpdate,
           card:'',
           cardId:uuid()
        });
        console.log(this.state.cardArray)
    }
    handleCardChange= (e)=>{
        this.setState({card:e.target.value});
    }
    render(){
        const {title} = this.props;
        return(<li className="list-group-item text-capitalize flex-column d-flex justify-content-between my-2 ">
            <div>
            <span>{title}</span>

            <span className="todo-icon float-right">
                <span className="mx-2 text-dark" ><i className="fas fa-pen"></i> </span>
                <span className="mx-2 text-danger"><i className="fas fa-trash"></i></span>
            </span>
                <Card card={this.state.card} handleCardChange={this.handleCardChange} handleCardSubmit={this.handleCardSubmit}/>
                    <CardDisplay cardArray={this.state.cardArray}/>
            </div>
        </li>)
    }
}
export default ListItem;