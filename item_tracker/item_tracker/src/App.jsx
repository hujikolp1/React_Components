import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import ItemList from "./ItemList";
import AddItem from "./AddItem";
import ToDo from "./ToDo";
import { render } from '@testing-library/react';

const App = () => {
  
    return(
    <ToDo
      addArticle={
        ({
          title,
          details,
          onChangeTitle,
          onChangedetails,
          onClickAdd
        }) => (
        <AddItem
          name="Articles"
          title={title}
          details={details}
          onChangeTitle={onChangeTitle}
          onChangedetails={onChangedetails}
          onClickAdd={onClickAdd}
        />
    )}
    articleList={({ articles, onClickToggle, onClickRemove }) => (
      <ItemList
        articles={articles}
        onClickToggle={onClickToggle}
        onClickRemove={onClickRemove}
      />
    )}
  />
  )
  

}


export default App;
