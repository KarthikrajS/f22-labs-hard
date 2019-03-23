import React from 'react';
import ListItem from './listItem';

class ListDisplay extends React.Component{

    render(){
        const {listArray} = this.props;
        return(
            <ul className="list-group my-5 d-inline-block">
                {
                    listArray.map(listItem => {
                        return <ListItem key={listItem.listId} title={listItem.title} />
                    })
                }
            </ul>);
    }
}
export default ListDisplay;