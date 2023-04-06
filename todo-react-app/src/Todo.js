import React from 'react';
import { ListItem, ListItemText, InputBase, Checkbox } from "@material-ui/core";

function Todo(props) {
    const item = props.item;
    return (
        <ListItem>
            <Checkbox
                checked={item.done}
            />
            <ListItemText>
                <InputBase
                    inputProps={{ "aria-label": "naked" }}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
        </ListItem>
    );
}

export default Todo;