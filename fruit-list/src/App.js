import React, { Component } from 'react';
import ListItem from './ListItem';

import './App.css';

class App extends Component {

  state = {
    fruit: [],
    fruits: []
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

    fruits.push({
      fruitName: fruit.split('-')[0],
      fruitQuantity: fruit.split('-')[1]
    });

    // console.log(fruits);

    this.setState({
      fruit: [],
      fruits: fruits
    }, () => console.log(this.state.fruits));


  }

  deleteHandler = (index) => {
    const listItems = this.state.fruits;
    listItems.splice(index, 1);
    this.setState({
      fruits: listItems
    });
  }

  render() {
    // console.log(this.state.fruits)
    let listItems = (
      <ul>
        {
          this.state.fruits.map((item, index) => {
            return <ListItem
              deleteHandler={() => this.deleteHandler(index)}
              fruitName={item.fruitName}
              fruitQuantity={item.fruitQuantity}
            />
          })
        }
      </ul>
    );

    return (
      <div className="App">
        <form>
        <div>
          <input type="text" value={this.state.fruit} onChange={this.changeHandler} />
          <input type="submit" value="Add" onSubmit={this.submitHandler}/>
        </div>
        </form>
        {listItems}
      </div>
    );
  }
}

export default App;
