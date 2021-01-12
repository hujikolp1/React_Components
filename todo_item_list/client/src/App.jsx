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
          summary,
          onChangeTitle,
          onChangeSummary,
          onClickAdd
        }) => (
        <AddItem
          name="Articles"
          title={title}
          summary={summary}
          onChangeTitle={onChangeTitle}
          onChangeSummary={onChangeSummary}
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
