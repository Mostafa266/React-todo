import React, { Component } from 'react'
import Item from './TodoItem';
export default class TodoList extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <h2>TodoList</h2>
                    <Item/>
                </div>
            </div>
        )
    }
}
