import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="App">
        <div className="container">
          <div className="row">
            <h1>New will added</h1>
            <TodoInput/>
            <TodoList/>
        </div>
      </div>
    </div>
  );
}

export default App;
