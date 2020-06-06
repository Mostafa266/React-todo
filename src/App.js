import React, {Component} from 'react';
import {v4 as uuidv4} from 'uuid';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {

    state = {
        items: [],
        id: uuidv4(),
        item: '',
        editItem: false
    }

    handleChange = e => {
        this.setState({
          item:e.target.value
        })
    }
    handleSubmit = e => {
       e.preventDefault();
       // here we create new item with new data coming from user then applay it to new array in other method
       const newItem = {
         id:this.state.id,
         title:this.state.item,
       }

    //  you can use two of his options
        const updatedItems = [...this.state.items,newItem];
    //  const updatedItems = this.state.items.concat(newItem);
    //  you can use two of his options

       this.setState({
         items:updatedItems,
         item:'',
         id:uuidv4(),
         editItem:false
       }, ()=> console.log(this.state))

    }
    clearList = _ => {
        console.log('Clear List')
    }
    editItem = _ => {
      console.log('edit Item')
    }
    handleEdit = id => {
        console.log(`handle Edit ${id}`)
    }
    handleDelete = id => {
        console.log(`handle delete ${id}`)
    }

    render() {
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
                            editItem={this.editItem}/>
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
