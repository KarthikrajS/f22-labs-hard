import React from 'react';
import CardItem from './cardItem';

class CardDisplay extends React.Component{

    render(){
        const {cardArray,togglePopup} = this.props;
        return(
            <ul className="list-group my-5 ">
                {
                    cardArray.map(cardItem=>{
                        return <CardItem togglePopup={togglePopup} key={cardItem.cardId} title={cardItem.title}/>
                    })
                }
            </ul>
        )
    }
}

export default CardDisplay;