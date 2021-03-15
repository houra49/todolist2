import React, { Component } from 'react';
import ToDoItem from './ToDoItem'
let todos = [
    {
        isComplete: true,
        todo: 'Read a book',
        importance: 20
    },
    {
        isComplete: true,
        todo: 'Learn React.js',
        importance: 100
    },
    {
        isComplete: false,
        todo: 'Learn Node.js',
        importance: 2
    }
]
class ToDoList extends Component {
    state = {
        myTodos: todos.slice()
    }
    render() {
        return (
            <section>
                {this.state.myTodos.map((elt, i) => <ToDoItem
                    key={i}
                    todo={elt.todo}
                    isComplete={elt.isComplete}
                    importance={elt.importance}
                />)}
            </section>
        );
    }
}

export default ToDoList;