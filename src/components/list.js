import React from 'react';

class List extends React.Component{

    render(){
        const {handleSubmit,handleChange,list} = this.props;

        return(
            <div className="card card-body text-center">
            <form onSubmit={handleSubmit}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <div  className="input-group-text  bg-primary text-white">
                        <i className="fas fa-book"></i>
                    </div>
                </div>
                <input type="text" className="form-control" value={list} onChange={handleChange} placeholder="Add to To-Do List"/>
                <button type="submit" className="btn btn-primary">Add List</button>
            </div>

            {/*<input type="text" className="form-control" value={item}*/}
                   {/*onChange={handleChange}*/}
                   {/*placeholder="Add to To-Do List"/>*/}
            {/*<button type="submit" className={editItem ? "btn btn-success btn-block mt-3" :"btn btn-primary btn-block mt-3"}>{editItem ? 'Edit': 'Add'}</button>*/}
        </form>
        </div>)
    }
}
export default List;