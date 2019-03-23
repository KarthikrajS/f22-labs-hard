import React from 'react';

class Card extends React.Component{

    render(){
        const {card,handleCardChange, handleCardSubmit} = this.props;
        return(
            <div className="card card-body text-center my-5">
                <form onSubmit={handleCardSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div  className="input-group-text  bg-primary text-white">
                                <i className="fas fa-book"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control" value={card} onChange={handleCardChange} placeholder="Add to To-Do Card"/>
                        <button type="submit" className="btn btn-primary">Add Card</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Card;