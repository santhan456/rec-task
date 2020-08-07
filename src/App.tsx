import React from 'react';
import logo from './logo.svg';
import './App.css';
import { State,ListItem } from './store/reducer';
import { getList } from './store/selectors';
import { connect } from 'react-redux';

interface Props{
  listItems: ListItem[]
}

function App(props:Props) {

  const {listItems} = props;

  const itemRows = listItems.map((item:ListItem) => <tr key={item.id}>
    <td>{item.id}</td>
    <td>{item.title}</td>
    <td>{item.description}</td>
    <td>
    <button>Edit</button> | 
    <button>Delete</button>
    </td>
  </tr>);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Decription</th>
          <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {itemRows}
        </tbody>
      </table>
    </div>
  );
}

function mapStateToProps(state: State):Props  {
  console.log({state});
  return {
    listItems: getList(state)
  }
}

export default connect(mapStateToProps)(App);
