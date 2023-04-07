import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import { Paper, List, Container, AppBar, Toolbar, Grid, Typography, Button } from "@material-ui/core";
import './App.css';
import { call, signout } from './service/ApiService';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [count, setCount] = useState(0);
  
  const [todoItems, setTodoItems] = useState("");

  // add 함수 추가
  const add = (item) => {
    // const thisItems = items;
    // // item.id = "ID-" + thisItems.length;//key를 위한 id 추가
    // item.id = count;//key를 위한 id 추가
    // setCount(count+1);
    // item.done = false;
    // thisItems.push(item);
    // setItems(thisItems);
    // setTodoItems(items.length > 0 && (
    //   <Paper style={{ margin: 16 }}>
    //     <List>
    //       {items.map((item, idx) => (
    //         <Todo item={item} key={item.id} deleteItem={deleteItem} editItem={editItem} />
    //       ))}
    //     </List>
    //   </Paper>
    // ));
    // console.log(items);
    call("/todo","POST",item).then((response)=> setItems(response.data));
  }

  const deleteItem = (item) => {
    // const thisItems = items;
    // const newItems = thisItems.filter(e => e.id != item.id);
    // setItems(newItems);
    call("/todo","DELETE",item).then((response)=> setItems(response.data));
  }

  const editItem = (item) => {
    // setItems([...items]);
    // console.log(items);
    call("/todo","PUT",item).then((response) => setItems(response.data));
  }

  // call("/todo", "GET", null).then((response) => setItems(response.data));

  useEffect(() => {
    setTodoItems(items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {items.map((item, idx) => (
            <Todo item={item} key={item.id} deleteItem={deleteItem} editItem={editItem} />
          ))}
        </List>
      </Paper>
    ))
  }, [items]);

  useEffect(()=>{
    call("/todo", "GET", null).then((response) => setItems(response.data));
  }, []);

  var navigationBar = (
    <AppBar position='static'>
      <Toolbar>
        <Grid justify="space-between" container>
          <Grid item>
            <Typography variant='h6'>오늘의 할 일</Typography>
          </Grid>
          <Grid item>
            <Button color="inherit" onClick={signout}>logout</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
  
  // 로딩중이 아닐 때
  var todoListPage = (
    <div>
      {navigationBar}
      <Container maxWidth="md">
        <AddTodo add={add}/>
        <div className='TodoList'>{todoItems}</div>
      </Container>
    </div>
  );

  // 로딩중일 때
  // var loadingPage=<h1>로딩중...</h1>
  // var content = loadingPage;

  // if (!loading){
  //   console.log(loading);
  //   setLoading(!loading);
  //   content = todoListPage;
  // }
    var content = todoListPage;
  return (
    <div className='App'>
        {content}
    </div>
  );
}

export default App;