import React, {Component} from 'react';
import {v4 as uuidv4} from 'uuid';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {

    state = {
        items: [
            {
                id: 1,
                title: 'Make Breakfast'
            }, {
                id: 2,
                title: 'Learn new skill'
            }
        ],
        id: uuidv4(),
        item: '',
        editItem: false
    }

    handleChange = e => {
        console.log('handle Change')
    }
    handleSubmit = e => {
        console.log('handle Submit')
    }
    clearList = _ => {
        console.log('Clear List')
    }
    handleEdit = id => {
        console.log(`handle Edit ${id}`)
    }
    handleDelete = id => {
        console.log(`handle delete ${id}`)
    }

    render() {
        console.log(this.state.items[0].id)
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mx-auto col-md-8 mt-5'>
                        <h3 className='text-center text-capitalize'>
                            Todo input
                        </h3>
                        <TodoInput
                            item={this.state.item}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            handleEdit={this.handleEdit}/>
                        <TodoList
                            items={this.state.items}
                            handleDelete={this.handleDelete}
                            handleEdit={this.handleEdit}
                            clearList={this.clearList}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
