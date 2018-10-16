import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import ToDoItem from './ToDoItem';
import CustomScrollbars from 'util/CustomScrollbars';

const ToDoList = SortableContainer(({toDos, onTodoSelect, onTodoChecked, onMarkAsStart, width, textChanged}) => {
    this.arrayNormalIndex = 0;
    //width >= 1200 ? 'calc(100vh - 265px)' : 'calc(100vh - 245px)'
    return (
        <div className="module-list">
            <CustomScrollbars className="module-list-scroll scrollbar"
                              style={{height: toDos.length * 75}}>
                {toDos.map((todo, index) => {
                    this.arrayNormalIndex += 1
                    return (
                    <ToDoItem 
                    textChanged={(text) => {textChanged(text, index)}}
                    normalIndex={this.arrayNormalIndex} key={index} index={index} todo={todo} onTodoSelect={onTodoSelect}                    />              
                    )}
                )}
            </CustomScrollbars>
        </div>
    )
});

export default ToDoList;