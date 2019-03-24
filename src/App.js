import React, { Component } from 'react';
import Board from './components/board';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap';
import uuid from 'uuid';
import List from './components/list';
import ListDisplay from './components/listDisplay'


class App extends Component {
  state={
      boardCreated:false,
      listId:0,
      listArray:[],
      list:''

  };
  createBoard = (e) =>{
    this.setState({boardCreated: !this.state.boardCreated});
  };
  handleSubmit = (e) =>{
      e.preventDefault();
      let newList = {
          listId: this.state.listId,
          title: this.state.list
      };
      const update=[...this.state.listArray,newList];
      this.setState({
          listArray:update,
          list:'',
          listId:uuid()
      });

  };
    handleChange = (e) =>{
        this.setState({
            list: e.target.value
        });
    };

  rendering(){
    return (
        <div className="card card-body my-3">

            <Row>
                <Col xs={9}>
                    <div className="row">
                    <Col>
                        <List list={this.state.list} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>

                    </Col>
                    </div>
                </Col>
                <Col>
                    <span className="float-right"><button type="submit" style={{width:'18rem'}} className="btn btn-danger btn">Close Board</button></span>
                </Col>
            </Row>
            <div style={{display:'flex'}}>
                <ListDisplay listArray={this.state.listArray}/>
            </div>

        </div>);
  }
  render() {
    return (
      <div className="App">
          {this.state.boardCreated?this.rendering():<Board createBoard={this.createBoard} board={this.state.boardCreated}/>}
      </div>
    );
  }
}

export default App;
