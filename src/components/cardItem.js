import React from 'react';

class CardItem extends React.Component{
    render(){
        const {title,togglePopup} = this.props;
        return(<li className="list-group-item text-capitalize d-flex justify-content-between my-2 ">
            <div>{title}</div>
            <div className="todo-icon">
                <span className="mx-2 text-dark" ><i className="fas fa-pen"></i> </span>
                <span className="mx-2 text-danger" onClick={togglePopup}><i className="fas fa-trash"></i></span>
            </div>
        </li>)
    }
}

export default CardItem;