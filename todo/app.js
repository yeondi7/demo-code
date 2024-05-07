// File: app.js
import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

let todoList = [];
try {
  todoList = JSON.parse(fs.readFileSync('todos.json'));
} catch (err) {
  console.error(err);
}

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/todo', (req, res) => {
  res.render('todo', { todoList });
});

app.post('/todo', (req, res) => {
  const newTodo = req.body.newTodo;
  todoList.push(newTodo);
  fs.writeFileSync('todos.json', JSON.stringify(todoList));
  res.redirect('/todo');
});

app.post('/delete', (req, res) => {
  const deleteTodo = req.body.delete;
  todoList = todoList.filter(todo => todo !== deleteTodo);
  fs.writeFileSync('todos.json', JSON.stringify(todoList));
  res.redirect('/todo');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

export default app; // for testing