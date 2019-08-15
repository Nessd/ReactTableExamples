import React, { Component } from 'react';
import ReactTable from 'react-table'
//import 'react-table/react-table.css'
class App extends Component{
  constructor(props){
    super(props);
    this.state = { selected: null };
  }
  render() {
    const data = [
      { name: 'Tanner Linsley 1', age: 26, friend: {name: 'Jason Maurer 10', age: 23,} },
      { name: 'Tanner Linsley 2', age: 26, friend: {name: 'Jason Maurer 9', age: 23,} },
      { name: 'Tanner Linsley 3', age: 26, friend: {name: 'Jason Maurer 8', age: 23,} },
      { name: 'Tanner Linsley 4', age: 26, friend: {name: 'Jason Maurer 7', age: 23,} },
      { name: 'Tanner Linsley 5', age: 26, friend: {name: 'Jason Maurer 6', age: 23,} },
      { name: 'Tanner Linsley 6', age: 26, friend: {name: 'Jason Maurer 5', age: 23,} },
      { name: 'Tanner Linsley 7', age: 26, friend: {name: 'Jason Maurer 4', age: 23,} },
      { name: 'Tanner Linsley 8', age: 26, friend: {name: 'Jason Maurer 3', age: 23,} },
      { name: 'Tanner Linsley 9', age: 26, friend: {name: 'Jason Maurer 2', age: 23,} },
      { name: 'Tanner Linsley 10', age: 26, friend: {name: 'Jason Maurer 1', age: 23,} },
      { name: 'Tanner Linsley 1', age: 26, friend: {name: 'Jason Maurer 10', age: 23,} },
      { name: 'Tanner Linsley 2', age: 26, friend: {name: 'Jason Maurer 9', age: 23,} },
      { name: 'Tanner Linsley 3', age: 26, friend: {name: 'Jason Maurer 8', age: 23,} },
      { name: 'Tanner Linsley 4', age: 26, friend: {name: 'Jason Maurer 7', age: 23,} },
      { name: 'Tanner Linsley 5', age: 26, friend: {name: 'Jason Maurer 6', age: 23,} },
      { name: 'Tanner Linsley 6', age: 26, friend: {name: 'Jason Maurer 5', age: 23,} },
      { name: 'Tanner Linsley 7', age: 26, friend: {name: 'Jason Maurer 4', age: 23,} },
      { name: 'Tanner Linsley 8', age: 26, friend: {name: 'Jason Maurer 3', age: 23,} },
      { name: 'Tanner Linsley 9', age: 26, friend: {name: 'Jason Maurer 2', age: 23,} },
      { name: 'Tanner Linsley 10', age: 26, friend: {name: 'Jason Maurer 1', age: 23,} },
      { name: 'Tanner Linsley 1', age: 26, friend: {name: 'Jason Maurer 10', age: 23,} },
      { name: 'Tanner Linsley 2', age: 26, friend: {name: 'Jason Maurer 9', age: 23,} },
      { name: 'Tanner Linsley 3', age: 26, friend: {name: 'Jason Maurer 8', age: 23,} },
      { name: 'Tanner Linsley 4', age: 26, friend: {name: 'Jason Maurer 7', age: 23,} },
      { name: 'Tanner Linsley 5', age: 26, friend: {name: 'Jason Maurer 6', age: 23,} },
      { name: 'Tanner Linsley 6', age: 26, friend: {name: 'Jason Maurer 5', age: 23,} },
      { name: 'Tanner Linsley 7', age: 26, friend: {name: 'Jason Maurer 4', age: 23,} },
      { name: 'Tanner Linsley 8', age: 26, friend: {name: 'Jason Maurer 3', age: 23,} },
      { name: 'Tanner Linsley 9', age: 26, friend: {name: 'Jason Maurer 2', age: 23,} },
      { name: 'Tanner Linsley 10', age: 26, friend: {name: 'Jason Maurer 1', age: 23,} },
      { name: 'Tanner Linsley 1', age: 26, friend: {name: 'Jason Maurer 10', age: 23,} },
      { name: 'Tanner Linsley 2', age: 26, friend: {name: 'Jason Maurer 9', age: 23,} },
      { name: 'Tanner Linsley 3', age: 26, friend: {name: 'Jason Maurer 8', age: 23,} },
      { name: 'Tanner Linsley 4', age: 26, friend: {name: 'Jason Maurer 7', age: 23,} },
      { name: 'Tanner Linsley 5', age: 26, friend: {name: 'Jason Maurer 6', age: 23,} },
      { name: 'Tanner Linsley 6', age: 26, friend: {name: 'Jason Maurer 5', age: 23,} },
      { name: 'Tanner Linsley 7', age: 26, friend: {name: 'Jason Maurer 4', age: 23,} },
      { name: 'Tanner Linsley 8', age: 26, friend: {name: 'Jason Maurer 3', age: 23,} },
      { name: 'Tanner Linsley 9', age: 26, friend: {name: 'Jason Maurer 2', age: 23,} },
      { name: 'Tanner Linsley 10', age: 26, friend: {name: 'Jason Maurer 1', age: 23,} },
      { name: 'Tanner Linsley 1', age: 26, friend: {name: 'Jason Maurer 10', age: 23,} },
      { name: 'Tanner Linsley 2', age: 26, friend: {name: 'Jason Maurer 9', age: 23,} },
      { name: 'Tanner Linsley 3', age: 26, friend: {name: 'Jason Maurer 8', age: 23,} },
      { name: 'Tanner Linsley 4', age: 26, friend: {name: 'Jason Maurer 7', age: 23,} },
      { name: 'Tanner Linsley 5', age: 26, friend: {name: 'Jason Maurer 6', age: 23,} },
      { name: 'Tanner Linsley 6', age: 26, friend: {name: 'Jason Maurer 5', age: 23,} },
      { name: 'Tanner Linsley 7', age: 26, friend: {name: 'Jason Maurer 4', age: 23,} },
      { name: 'Tanner Linsley 8', age: 26, friend: {name: 'Jason Maurer 3', age: 23,} },
      { name: 'Tanner Linsley 9', age: 26, friend: {name: 'Jason Maurer 2', age: 23,} },
      { name: 'Tanner Linsley 10', age: 26, friend: {name: 'Jason Maurer 1', age: 23,} },
      { name: 'Tanner Linsley 1', age: 26, friend: {name: 'Jason Maurer 10', age: 23,} },
      { name: 'Tanner Linsley 2', age: 26, friend: {name: 'Jason Maurer 9', age: 23,} },
      { name: 'Tanner Linsley 3', age: 26, friend: {name: 'Jason Maurer 8', age: 23,} },
      { name: 'Tanner Linsley 4', age: 26, friend: {name: 'Jason Maurer 7', age: 23,} },
      { name: 'Tanner Linsley 5', age: 26, friend: {name: 'Jason Maurer 6', age: 23,} },
      { name: 'Tanner Linsley 6', age: 26, friend: {name: 'Jason Maurer 5', age: 23,} },
      { name: 'Tanner Linsley 7', age: 26, friend: {name: 'Jason Maurer 4', age: 23,} },
      { name: 'Tanner Linsley 8', age: 26, friend: {name: 'Jason Maurer 3', age: 23,} },
      { name: 'Tanner Linsley 9', age: 26, friend: {name: 'Jason Maurer 2', age: 23,} },
      { name: 'Tanner Linsley 10', age: 26, friend: {name: 'Jason Maurer 1', age: 23,} },
    ];

    const columns = [
      {
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      },
      {
        Header: 'Age',
        accessor: 'age',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      },
      {
        id: 'friendName', // Required because our accessor is not a string
        Header: 'Friend Name',
        accessor: d => d.friend.name // Custom value accessors!
      },
      {
        Header: props => <span>Friend Age</span>, // Custom header components!
        accessor: 'friend.age'
      }
    ];

    let getTrProps = (state, rowInfo) => {
      if (rowInfo && rowInfo.row) {
        return {
          onClick: (e) => {
            this.setState({
              selected: rowInfo.index
            })
          },
          style: {
            background: rowInfo.index === this.state.selected ? '#00afec' : 'white',
            color: rowInfo.index === this.state.selected ? 'white' : 'black'
          }
        }
      }else{
        return {}
      }
    };

    return(
      <ReactTable
      data={data}
      columns={columns}
      getTrProps={getTrProps}
      />
    );
  }
}
export default App;
