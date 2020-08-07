import React from 'react';
import logo from './logo.svg';
import './App.css';
import { State,ListItem } from './store/reducer';
import { getList } from './store/selectors';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { addItem } from './store/actions';

interface Props{
  addItem: any
}

class AddItem extends React.Component<any, any>  {

  constructor(props:any){
    super(props);
    this.state = {
      form:{}
    }
  }

  handleChange(){

  }
  
  render(){
  return (
    <div className="App">
      <form>
      <div>
        <label>Title</label>
        <input name="title" onChange={this.handleChange}/>
      </div>
      <div>
        <label>Description</label>
        <input  name="description" onChange={this.handleChange} />
      </div>
      <div>
      <button type="submit">Submit</button>
      </div>
      </form>
    </div>
  );
  }
}

function mapActions(dispatch:Dispatch)  {
  return bindActionCreators({
    addItem: addItem
  }, dispatch)
}

export default connect(undefined, mapActions)(AddItem);
