import React from "react";
import Todo from "../components/Todo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {

    return (
        <div className="item-list">
            {props.list2.map(todo => (
                <Todo key={todo.id} item={todo} toggleItem={props.toggleItem} />
            ))}
                <button onClick={props.clearCompleted}>
                    Clear Completed Objective
                </button>
        </div>

    );
};

export default TodoList;