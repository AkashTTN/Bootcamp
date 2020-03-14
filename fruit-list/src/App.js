import React, { Component, useState } from 'react';
import ListItem from './ListItem';

import './App.css';

class App extends Component {

  state = {
    fruit: '',
    fruits: [],
    editMode: {index: null, isEdited: false}
  }

  changeHandler = (e) => {

    let fruit = e.target.value;
    // console.log(fruit);
    this.setState({
      fruit
    });

  }

  submitHandler = (event) => {

    event.preventDefault();

    let fruits = [...this.state.fruits];

    const { fruit } = this.state;

    console.log(typeof fruit);

    
    if(this.state.editMode.isEdited === true) {

      fruits[this.state.editMode.index] = {fruitName: fruit.split('-')[0], fruitQuantity: fruit.split('-')[1]};
      this.setState({fruit: [], fruits, editMode: {index: null, isEdited: false}});

    } else {

      fruits.push({
        fruitName: fruit.split('-')[0],
        fruitQuantity: fruit.split('-')[1] || 0
      });
  
      // console.log(fruits);
  
      this.setState({
        fruit: [],
        fruits: fruits
      }, () => console.log(this.state.fruits));

    }
    


  }

  deleteHandler = (index) => {
    const listItems = this.state.fruits;
    listItems.splice(index, 1);
    this.setState({
      fruits: listItems
    });
  }

  editHandler = (index) => {
    
    this.setState((prevState) => {
      const fruit = prevState.fruits[index];
      console.log([fruit.fruitName, fruit.fruitQuantity]);
      return { fruit: `${fruit.fruitName}-${fruit.fruitQuantity}`, editMode: {index, isEdited:true} };
    });

  }

  render() {
    // console.log(this.state.fruits)
    let listItems = (
      <ul>
        {
          this.state.fruits.map((item, index) => {
            return <ListItem
              fruitName={item.fruitName}
              fruitQuantity={item.fruitQuantity}
              deleteHandler={() => this.deleteHandler(index)}
              editHandler={() => this.editHandler(index)}
              // isEdited={item.editMode}
            />
          })
        }
      </ul>
    );

    return (
      <div className="App">
        <form onSubmit={this.submitHandler}>
        <div>
          <input type="text" value={this.state.fruit} onChange={this.changeHandler} required/>
          <input type="submit" value="Add"/>
        </div>
        </form>
        {listItems}
      </div>
    );
  }
}

export default App;
