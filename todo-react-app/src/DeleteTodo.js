import { IconButton } from '@material-ui/core';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import React from 'react';

function DeleteTodo(props) {
    const deleteEventHandler = () => {
        props.deleteForComplete();
    }
    

        return(
            <div>
                Delete for Complete
                <IconButton aria-label='Delete' onClick={deleteEventHandler}>
                    <DeleteOutlined />
                </IconButton>
            </div>
        );
}

export default DeleteTodo;