import React from 'react';

class Board extends React.Component{
    render(){
        const {boardCreated,createBoard} = this.props;
        return(<div className="card-body">
            <form>
                {boardCreated?'':<button onClick={createBoard} type="submit" className="btn btn-primary btn-block mt-3">Create Board</button>}
            </form>
        </div>)
    }
}

export default Board;