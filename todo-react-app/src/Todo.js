import React, { useState } from 'react';
import { ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';

function Todo(props) {
    // const item = props.item;
    const [item, setItem] = useState(props.item);
    const [readOnly, setReadonly] = useState(true);
    const [newTitle, setNewTitle] = useState(item.title);
    const editItem = props.editItem;

    const turnOffReadOnly = () => {
        setReadonly(false);
    }

    const turnOnReadOnly = (e) => {
        if (e.key === 'Enter') {
            setReadonly(true);
            item.title = newTitle;
            editItem();
        }
    }
    
    const editEventHandler = (e) => {
        // item.title = e.target.value;
        setNewTitle(e.target.value);
        // editItem();
    }

    // deleteEventHandler 작성
    const deleteEventHandler = () => {
        props.deleteItem(item);
    }

    const checkboxEventHandler = (e) => {
        item.done = e.target.checked;
        editItem();
    }

    return (
        <ListItem>
            <Checkbox
                checked={item.done}
                onChange={checkboxEventHandler}
            />
            <ListItemText>
                <InputBase
                    inputProps={{ "aria-label": "naked", readOnly: readOnly }}
                    onClick={turnOffReadOnly}
                    onKeyDown={turnOnReadOnly}
                    onChange={editEventHandler}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={newTitle}
                    multiline={true}
                    fullWidth={true}

                />
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='Delete' onClick={deleteEventHandler}>
                    <DeleteOutlined />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Todo;