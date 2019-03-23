import React from 'react';
import CardItem from './cardItem';

class CardDisplay extends React.Component{

    render(){
        const {cardArray} = this.props;
        return(
            <ul className="list-group my-5">
                {
                    cardArray.map(cardItem=>{
                        return <CardItem key={cardItem.id} title={cardItem.title}/>
                    })
                }
            </ul>
        )
    }
}

export default CardDisplay;