import React, { Component } from 'react';
import TodoApp from './components/todo/TodoApp';
import './App.css';
import './css/style.css';
// import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp/>
      </div>
    );
  }
}

// Class Components
//class LearningComponents extends Component {
//  render() {
//    return (
//      <div className="LearningComponents">
//        <FirstComponent></FirstComponent>
//        <SecondComponent></SecondComponent>
//      </div>
//    );
//  }
//}

//class FirstComponent extends Component {
//  render() {
//    return (
//      <div className="FirstComponent">
//        My FirstComponent.
//      </div>
//    );
//  }
//}

// function component is much simpler than class
//function SecondComponent() {
//    return (
//      <div className="SecondComponent">
//        My SecondComponent.
//      </div>
//    );
//}

export default App;