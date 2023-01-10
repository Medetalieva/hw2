import './App.css';
import React from 'react';
import Header from './components/Header';


const headerDate = {
   author:{
    name: 'IT',
    avatarUrl: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
   },
   text: 'Starting-Programmer',
   date: new Date(),
  
}
  

function App() {
  return (
    <div className="App">
      <Header 
      author = {headerDate.author}

      text = {headerDate.text}
      date = {headerDate.date}
      />
      
    </div>
  );
}

export default App;
