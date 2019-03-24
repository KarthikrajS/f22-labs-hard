import React from 'react';
import Card from './card'
import uuid from 'uuid';
import CardDisplay from "./cardDisplay";
import PopUp from './popup'

class ListItem extends React.Component{
    state={
        cardId:uuid(),
        cardArray:[],
        card:'',
        deleteCardId:1,
        showCardPopup:false
    };
    handleCardSubmit =(e)=>{
        e.preventDefault();
        let newCard ={
            cardId:this.state.cardId,
            title:this.state.card
        };
        const cardUpdate =[...this.state.cardArray,newCard];
        this.setState({
           cardArray:cardUpdate,
           card:'',
           cardId:uuid()
        });
    };
    handleCardChange= (e)=>{
        this.setState({card:e.target.value});
    };
    confirmCardDelete = (id) =>{
      if(this.state.deleteCardId !== 1){
          const remainingCards = this.state.filter(card => card.cardId !== id);
          this.setState({cardArray:remainingCards,deleteCardId:1});
      }
    };
    togglePopup= (e) => {
        this.setState({
            showCardPopup: !this.state.showCardPopup
        });
    };
    render(){
        const {title} = this.props;
        return(
            <div className="list-group-item text-capitalize flex-fill d-flex justify-content-between my-2 ">
            <div>
            <span>{title}</span>

            <span className="todo-icon float-right">
                <span className="mx-2 text-dark" ><i className="fas fa-pen"></i> </span>
                <span className="mx-2 text-danger"><i className="fas fa-trash"></i></span>
            </span>
                <Card card={this.state.card} handleCardChange={this.handleCardChange} handleCardSubmit={this.handleCardSubmit}/>
                    <CardDisplay togglePopup={this.togglePopup} cardArray={this.state.cardArray}/>
            </div>
            {this.state.showCardPopup ? <PopUp confirmCardDelete={this.confirmCardDelete } text='Close Me' closePopup={this.togglePopup.bind(this)} />
                : null
            }
        </div>)
    }
}
export default ListItem;