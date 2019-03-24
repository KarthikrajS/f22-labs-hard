import React from 'react';
import ListItem from './listItem';

class ListDisplay extends React.Component{


    render(){
        const {listArray} = this.props;
        return(
            <div className="list-group">
                {
                    listArray.map(listItem => {
                        return <ListItem key={listItem.listId} title={listItem.title} />
                    })
                }
            </div>);
    }
}
export default ListDisplay;