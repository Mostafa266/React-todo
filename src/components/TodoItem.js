import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
         const{title} = this.props;
        return (
            <div>
                {title}
            </div>
        )
    }
}
