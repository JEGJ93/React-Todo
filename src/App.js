import React from 'react';
import TodoForm from '../src/components/TodoForm';
import TodoList from '../src/components/TodoList';
import '../src/components/Todo.css'

const list = [
  {
    task: 'Clean Bathroom',
    id: 15288117043565,
    completed: false
  },
  {
    task: 'Wash Car',
    id: 15288117038475,
    completed: false
  },
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      list
    };
  }

addItem = (e, item3) => {
  e.preventDefault();
  const newItem = {
    task: item3,
    id: Date.now(),
    completed: false
  };
  this.setState({
    list: [...this.state.list, newItem]
  });
};


toggleItem = itemId => {
  console.log(itemId);
  this.setState({
    list: this.state.list.map(item => {
      if (itemId === item.id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    })
  })
}

clearCompleted = e => {
  e.preventDefault();
  this.setState({
    list: this.state.list.filter(item => !item.completed)
  });
};

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList
         list2 ={this.state.list}
         toggleItem={this.toggleItem}
         clearCompleted={this.clearCompleted}
         />
      </div>
    );
  }
}

export default App;
